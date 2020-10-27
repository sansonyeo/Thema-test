import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import 'tui-date-picker/dist/tui-date-picker.css'; // 데이트 피커 스타일 추가

const columnData = [
  {
    header: '날짜',
    name: 'date',
    editor: {
      type: 'datePicker',
      options: {
        format: 'yyyy-MM-dd'
      }
    }
  },
  {
    header: '내역',
    name: 'category1',
    formatter: 'listItemText',
    editor: {
      type: 'select',
      options: {
        listItems: [
          {
            text: '선택 안함',
            value: '0'
          },
          {
            text: '식비',
            value: '1'
          },
          {
            text: '문화 생활비',
            value: '2'
          },
          {
            text: '교통비',
            value: '3'
          },
          {
            text: '관리비',
            value: '4'
          }
        ]
      }
    }
  },
  {
    header: '비고',
    name: 'category2',
	editor: 'text'
  },
  {
    header: '결제 방식',
    name: 'payment',
    formatter: 'listItemText',
    editor: {
      type: 'checkbox',
      options: {
        listItems: [
          {
            text: '현금',
            value: '1'
          },
          {
            text: '카드',
            value: '2'
          },
          {
            text: '페이코',
            value: '3'
          }
        ]
      }
    }
  },
  {
    header: '금액',
    name: 'amount',
    editor: 'text',
    formatter({value}) { // 추가
      return `${value}원`;
    }
  }
];

const rowData = [
  {
    date: '2019-11-27',
    category1: '1', // '식비' -> '1' 변경
    category2: '회사 편의점',
    payment: '3', // '페이코' -> '3' 변경
    amount: '5000'
  }
];

const grid = new Grid({
  el: document.getElementById('grid'),
  columns: columnData,
  data: rowData,
  summary: { // 추가
    height: 40,
    position: 'bottom',
    columnContent: {
      amount: {
        template(valueMap) {
          return `합계 : ${valueMap.sum}원`;
        }
      }
    }
  }
});