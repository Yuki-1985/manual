import React from 'react';
import { Table, Card } from 'react-bootstrap';

const AccountingBillingIssue = () => {
  return (
    <div>
      <h4 className="fw-bold mt-3">【概要】</h4>
      <div className="ps-4">
        <p>当ページでは「請求書の発行ルール」について説明します。</p>
      </div>

      <h4 className="fw-bold mt-5">【１】業務領域</h4>
      <div className="ps-4">
        <p>
          LIFTI Lineグループ（以下、LIFTI Line）で発行する請求書は、従来通りの手順で発行作業を行ってください。
          <br />
          その後、発行した請求書データをUnivearth宛に下記手順で共有をしてください。
        </p>
        <Card className="my-3">
          <Card.Body className="text-center text-muted">
            ※※※イメージ図※※※
          </Card.Body>
        </Card>
      </div>

      <h4 className="fw-bold mt-5">【２】業務フロー</h4>
      <div className="ps-4">
        <p>LIFTI Line担当者にて対応していただく内容は下記の通りです。</p>
        <Table bordered responsive className="mt-3">
          <thead>
            <tr>
              <th className="bg-secondary text-white"><strong>LIFTI Line担当者</strong></th>
              <th className="bg-dark text-white">Univearth担当者</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ol style={{ paddingLeft: '20px', marginBottom: 0 }}>
                  <li>自社にて請求書を発行</li>
                  <li>取引先へ請求書を送付</li>
                  <li>2完了後、請求書PDFを、Googleドライブの指定フォルダに格納</li>
                  <li value="8"><strong>毎月月初に入金確認を実施</strong></li>
                </ol>
              </td>
              <td>
                <ol start={4} style={{ paddingLeft: '20px', marginBottom: 0 }}>
                  <li>3完了後、自動的に請求書PDFの情報がfreeeファイルボックスに反映</li>
                  <li>freeeファイルボックスより、取引登録（収入）を実施</li>
                  <li>Googleドライブの指定フォルダ内にある請求書PDFを入金管理フォルダに格納</li>
                  <li>入金管理シートにデータを反映（振込待ち）</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <h6 className="fw-bold mt-5">＜入金管理シート＞</h6>
      <div className="ps-4">
        <p>各企業の月毎の振込先・振込状況は、下記スプレッドシートにて管理することができます。</p>
        <Table bordered style={{ width: '300px' }}>
          <thead>
            <tr>
              <th className="bg-light">Univearth</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-light">智商運輸</td>
              <td></td>
            </tr>
            <tr>
              <td className="bg-light">三之丸通商</td>
              <td></td>
            </tr>
            <tr>
              <td className="bg-light">福昇運輸</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <p className="text-danger">
          ※自社以外のシートは閲覧することはできません（誤って権限付与申請は出さないでください）
        </p>
      </div>
    </div>
  );
};

export default AccountingBillingIssue;