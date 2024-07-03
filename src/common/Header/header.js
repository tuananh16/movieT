import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import SearchMovieApi from "../../api/searchMovieApi"; // Đảm bảo rằng đường dẫn và tên tệp phù hợp với thực tế
import useDebounce from "../useDebonce";

function Header() {
  const [searchTerm, setSearchTerm] = useState(""); // State lưu từ khóa tìm kiếm
  const [searchResults, setSearchResults] = useState([]); // State lưu kết quả tìm kiếm
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Từ khóa tìm kiếm đã được trì hoãn với 500ms
  const [open, setOpen] = useState(false); // Đổi state thành boolean

  // Xử lý sự kiện thay đổi từ khóa tìm kiếm
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Cập nhật state từ khóa tìm kiếm khi người dùng nhập
  };


  // useEffect để gọi API khi debouncedSearchTerm thay đổi
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Gọi API SearchMovieApi.getAll với từ khóa tìm kiếm đã được trì hoãn
      SearchMovieApi.getAll(debouncedSearchTerm)
        .then((response) => {
          // Xử lý kết quả trả về từ API (response.data)
          setSearchResults(response.items); // Cập nhật state kết quả tìm kiếm
        })
        .catch((error) => {
          // Xử lý lỗi nếu gọi API không thành công
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]); // Nếu từ khóa tìm kiếm trống, đặt lại kết quả tìm kiếm thành mảng rỗng
    }
  }, [debouncedSearchTerm]); // Dependency array đảm bảo useEffect chỉ chạy khi debouncedSearchTerm thay đổi

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.location.href = `/tim-phim/${searchTerm}`;
    }
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const handleBlur = () => {
    // Đợi một chút trước khi ẩn danh sách gợi ý
    setTimeout(() => setOpen(false), 200);
  };

  const handleLinkMouseDown = (event) => {
    // Ngăn chặn sự kiện onBlur
    event.preventDefault();
  };
  return (
    <div className="header">
      <div className="header-left">
        <a href="/" className="logo">
          MovieT
        </a>
        <ul className="nav-links">
          <li>Trang chủ</li>
          <li className="genre">
            Thể loại
            <table className="genre-container">
              <tbody>
                <tr>
                  <td>
                    <a href="/the-loai/hanh-dong">Hành động</a>
                  </td>
                  <td>
                    <a href="/the-loai/phim-hai">Hài</a>
                  </td>
                  <td>
                    <a href="/the-loai/phieu-luu">Phiêu lưu</a>
                  </td>
                  <td>
                    <a href="/the-loai/hoat-hinh">Hoạt hình</a>
                  </td>
                  <td>
                    <a href="/the-loai/lich-su">Lịch sử</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/the-loai/tai-lieu">Tài liệu</a>
                  </td>
                  <td>
                    <a href="/the-loai/gia-dinh">Gia đình</a>
                  </td>
                  <td>
                    <a href="/the-loai/gia-tuong">Giả tưởng</a>
                  </td>
                  <td>
                    <a href="/the-loai/kinh-di">Kinh dị</a>
                  </td>
                  <td>
                    <a href="/the-loai/bi-an">Bí ẩn</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/the-loai/lang-man">Lãng mạn</a>
                  </td>
                  <td>
                    <a href="/the-loai/khoa-hoc-vien-tuong">
                      Khoa học viễn tưởng
                    </a>
                  </td>
                  <td>
                    <a href="/the-loai/co-trang">Cổ trang</a>
                  </td>
                  <td>
                    <a href="/the-loai/tinh-cam">Tình cảm</a>
                  </td>
                  <td>
                    <a href="/the-loai/chien-tranh">Chiến tranh</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li className="genre">
            Phim theo quốc gia
            <table className="genre-container">
              <tbody>
                <tr>
                  <td>
                    <a href="/quoc-gia/au-my">Âu Mỹ</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/anh">Anh</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/Nga">Nga</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/an-do">Ấn Độ</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/viet-nam">Việt Nam</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/quoc-gia/trung-quoc">Trung Quốc</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/Indonesia">Indonesia</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/phap">Pháp</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/hong-Kong">Hồng Kông</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/han-quoc">Hàn Quốc</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/quoc-gia/nhat-ban">Nhật Bản</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/thai-lan">Thái Lan</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/dai-loan">Đài Loan</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/ha-lan">Hà Lan</a>
                  </td>
                  <td>
                    <a href="/quoc-gia/philippines">Philippines</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>Danh sách của tôi</li>
        </ul>
      </div>
      <div className="header-right">
        <div className="input-wrapper">
          <button className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            // name="text"
            className="input"
            placeholder="Search.."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div className={`list-suggest ${open ? "" : "open"}`}>
          <ul>
            {searchResults?.map((result) => (
              <a
                href={`/phim/${result.slug}`}
                key={result.id}
                onMouseDown={handleLinkMouseDown}
              >
                <li>
                  <div className="search-avta">
                    <img src={result.poster_url} alt={result.slug} />
                  </div>
                  <div className="search-info">
                    <h3>{result.name}</h3>
                    <span>{result.original_name}</span>
                    <span>{result.current_episode}</span>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
        <button className="auth-link">Register</button>
        <button className="auth-link login">Login</button>
      </div>
    </div>
  );
}

export default Header;
