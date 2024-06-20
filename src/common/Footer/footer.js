import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <ul className="social-icons">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
      <table>
        <tbody>
          <tr>
            <td>Mô tả âm thanh</td>
            <td>Trung tâm trợ giúp</td>
            <td>Thẻ quà tặng</td>
            <td>Trung tâm đa phương tiện</td>
          </tr>
          <tr>
            <td>Quan hệ với nhà đầu tư</td>
            <td>Việc làm</td>
            <td>Điều khoản sử dụng</td>
            <td>Quyền riêng tư</td>
          </tr>
          <tr>
            <td>Thông báo pháp lý</td>
            <td>Tùy chọn cookie</td>
            <td>Thông tin doanh nghiệp</td>
            <td>Liên hệ với chúng tôi</td>
          </tr>
        </tbody>
      </table>
      <span>© Copyright by Minty</span>
    </div>
  );
}

export default Footer;
