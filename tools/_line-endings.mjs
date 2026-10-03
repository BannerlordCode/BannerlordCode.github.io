#!/usr/bin/env node
// tools/_line-endings.mjs —— 共享行尾尺（唯一权威）
//
// 为什么存在：本会话同一个 CRLF 争议吵了两轮。第一轮结论是对的，
// **但那把尺没有落成文件**，于是每个 worker 各自即兴造探针，第二轮又吵一次，
// 且结论一度相反。结论会随时间失效，工具不会。
//
// 判读规则（写在文件头，不靠记忆）：
//   LF 行数 == 0 且 CR 数 == 0        → 空文件
//   CR 数 == 0                        → 纯 LF
//   CRLF 数 == LF 行数 且 游离 CR == 0 → 全 CRLF
//   CRLF 数 <  LF 行数                → mixed，**必须逐行看是哪几行**，不许笼统说 mixed
//   游离 CR > 0                       → 存在不跟 LF 相邻的 CR（老 Mac 行尾 / 杂散 CR）
//   CRLF 数 > LF 行数                 → 尺或数据有问题 → exit 2
//
// ⛔ 禁用（三个探针在本会话都栽在这里，输出「全命中」或 0 这种过于整齐的错值）：
//   grep -o '\r'      BRE 里匹配的是**字母 r**，数的是 r 的个数
//   rg -c $'\r$'      把每个 CRLF 行都算命中；部分 CRLF 时输出「全命中」
//   grep -c $'\r$'    在真·CRLF 文件上也返回 0
// 「全命中」和「全不命中」一样需要阳性对照。
//
// 用法：
//   node tools/_line-endings.mjs --selftest
//   node tools/_line-endings.mjs <文件> [文件...]
//   node tools/_line-endings.mjs --scope tools/_deadmember-scope.txt [campaign-ext|mission-ext]
//
// 退出码：0 正常 · 1 有 mixed 或游离 CR（不是错误，是需要逐行看）· 2 自检失败/参数错/读数不自洽

import fs from 'node:fs';

const CR = 0x0d, LF = 0x0a;

export function measure(buf) {
  let lines = 0, crlf = 0, totalCr = 0, loneCr = 0;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === CR) {
      totalCr++;
      if (i + 1 < buf.length && buf[i + 1] === LF) crlf++; else loneCr++;
    } else if (buf[i] === LF) {
      lines++;
    }
  }
  const pureLf = lines - crlf;
  return { lines, crlf, pureLf, totalCr, loneCr };
}

export function classify(m) {
  if (m.crlf > m.lines) return 'INCONSISTENT';
  if (m.lines === 0) return m.totalCr === 0 ? 'EMPTY' : 'NO_LF_BUT_HAS_CR';
  if (m.loneCr > 0) return 'LONE_CR';
  if (m.crlf === 0) return 'PURE_LF';
  if (m.crlf === m.lines) return 'ALL_CRLF';
  return 'MIXED';
}

export function mixedLineNumbers(buf) {
  const out = [];
  let line = 1;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === LF) {
      if (i === 0 || buf[i - 1] !== CR) out.push(line);
      line++;
    }
  }
  return out;
}

function selftest() {
  const cases = [
    { name: '纯 LF',              s: 'a\nb\nc\n',      lines: 3, crlf: 0, pureLf: 3, cls: 'PURE_LF' },
    { name: '全 CRLF',            s: 'a\r\nb\r\nc\r\n', lines: 3, crlf: 3, pureLf: 0, cls: 'ALL_CRLF' },
    { name: 'mixed（1 行 LF）',   s: 'a\r\nb\r\nc\n', lines: 3, crlf: 2, pureLf: 1, cls: 'MIXED' },
    { name: '游离 CR（老 Mac）',  s: 'a\rb\r',        lines: 0, crlf: 0, pureLf: 0, cls: 'NO_LF_BUT_HAS_CR' },
    { name: '空文件',             s: '',              lines: 0, crlf: 0, pureLf: 0, cls: 'EMPTY' },
    { name: '末尾无换行',         s: 'a\r\nb\r\nc',   lines: 2, crlf: 2, pureLf: 0, cls: 'ALL_CRLF' },
  ];
  let fail = 0;
  console.log('== 行尾尺自检 ==');
  for (const c of cases) {
    const m = measure(Buffer.from(c.s, 'latin1'));
    const cls = classify(m);
    const ok = m.lines === c.lines && m.crlf === c.crlf && m.pureLf === c.pureLf && cls === c.cls;
    if (!ok) fail++;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${c.name.padEnd(18)} lines=${m.lines} crlf=${m.crlf} pureLf=${m.pureLf} -> ${cls}${ok ? '' : `  (期望 lines=${c.lines} crlf=${c.crlf} pureLf=${c.pureLf} ${c.cls})`}`);
  }
  // ① 杂散 CR 必须被检出，不得被静默归一化（第一次写这条时我把期望写错了：
  //    `a\r\r\n\r\r\n` 是「每行前多一个杂散 CR」，合法输入，正确分类是 LONE_CR）
  const stray = measure(Buffer.from('a\r\r\n\r\r\n', 'latin1'));
  const strayCls = classify(stray);
  const strayOk = strayCls === 'LONE_CR' && stray.loneCr === 2 && stray.crlf === 2 && stray.lines === 2;
  if (!strayOk) fail++;
  console.log(`  ${strayOk ? 'PASS' : 'FAIL'}  杂散 CR 被检出而非静默归一化  lines=${stray.lines} crlf=${stray.crlf} loneCR=${stray.loneCr} -> ${strayCls}${strayOk ? '' : '  (期望 LONE_CR, loneCr=2, crlf=2, lines=2)'}`);
  // ② 不自洽读数必须被挡住（构造性用例：真实字节流不可能产生，保留为防御分支）
  const inconsistentCls = classify({ lines: 1, crlf: 2, pureLf: -1, totalCr: 2, loneCr: 0 });
  const incOk = inconsistentCls === 'INCONSISTENT';
  if (!incOk) fail++;
  console.log(`  ${incOk ? 'PASS' : 'FAIL'}  不自洽读数被挡住          {lines:1,crlf:2} -> ${inconsistentCls}`);
  console.log(`\n  selftest: ${cases.length + 2 - fail}/${cases.length + 2}`);
  if (fail) { console.log('  自检未通过 —— 本尺不可信，不出任何结论。'); process.exit(2); }
  console.log('  自检通过。');
}

function report(files) {
  let rows = [], worst = 0, mixedCount = 0, inconsistent = 0;
  for (const f of files) {
    let buf;
    try { buf = fs.readFileSync(f); } catch { console.log(`  ${f}\tREAD_ERROR`); worst = 2; continue; }
    const m = measure(buf);
    const cls = classify(m);
    if (cls === 'INCONSISTENT') { inconsistent++; worst = 2; }
    if (cls === 'MIXED' || cls === 'LONE_CR') mixedCount++;
    let detail = '';
    if (cls === 'MIXED') detail = `  纯 LF 行号=[${mixedLineNumbers(buf).slice(0, 12).join(',')}${mixedLineNumbers(buf).length > 12 ? '…' : ''}]`;
    rows.push(`  ${cls === 'PURE_LF' ? 'LF  ' : cls === 'ALL_CRLF' ? 'CRLF' : cls === 'MIXED' ? 'MIX ' : cls === 'EMPTY' ? '----' : '????'}  ${String(m.lines).padStart(4)} 行  crlf=${String(m.crlf).padStart(4)}  pureLF=${String(m.pureLf).padStart(4)}  游离CR=${m.loneCr}  ${f}${detail}`);
  }
  console.log('== 行尾读数（唯一权威，逐字引用）==');
  rows.forEach((r) => console.log(r));
  const tally = {};
  rows.forEach((r) => { const k = r.slice(2, 6).trim(); tally[k] = (tally[k] || 0) + 1; });
  console.log(`\n  合计 ${rows.length} 个文件  ${Object.entries(tally).map(([k, v]) => `${k}=${v}`).join('  ')}`);
  const crlfFiles = rows.filter((r) => r.startsWith('  CRLF')).map((r) => r.trim().split(/\s{2,}/).pop());
  if (crlfFiles.length) { console.log('  全 CRLF 文件：'); crlfFiles.forEach((f) => console.log('    ' + f)); }
  if (inconsistent) { console.log(`\n  ⛔ ${inconsistent} 个文件读数不自洽 → 尺或数据有问题`); process.exit(2); }
  process.exit(mixedCount ? 1 : 0);
}

const argv = process.argv.slice(2);
if (!argv.length || argv[0] === '--help') {
  console.log('用法: node tools/_line-endings.mjs --selftest | <文件...> | --scope <清单> [过滤器]');
  process.exit(argv.length ? 0 : 2);
}
if (argv[0] === '--selftest') selftest();
else if (argv[0] === '--scope') {
  const scope = fs.readFileSync(argv[1] ?? 'tools/_deadmember-scope.txt', 'utf8')
    .split('\n').filter((l) => l.startsWith('content/'));
  const filt = argv[2];
  report(filt ? scope.filter((p) => p.includes(`/${filt}/`)) : scope);
} else report(argv);