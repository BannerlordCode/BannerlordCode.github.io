# Lead 台账 · 英文树中文残留（en-tree CJK）修复线

> **唯一负责人**：lead-31（en-integrity 线）
> **仓库**：`C:/WorkSpace/Bannerlord/BannerlordCode.github.io`（分支 main，HEAD 每次现读）
> **绝对路径**：`C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/_verify/lead-en-integrity-PROGRESS.md`
> **状态**：🟡 进行中（侦察完成，修复未开始）

---

## §0 侦察结论（全部实测，命令可重跑）

### 0.1 en 树 CJK 扫描（现读 HEAD `c75591239c`）

```
TOTAL_TRACKED_EN_MD   = 18,236   （git ls-files -- 'content/' 后按 ^content/[^/]+/en/.*\.md$ 过滤）
CJK_PAGES             = 2,368
CLASS1_BANNER_ONLY    = 2,122    （唯一 CJK 行 = 自动生成告警横幅「本页为自动生成的类参考…」）
CLASS2_CHINESE_BODY   = 9        （content/v1.3.15/en/native-1.3.15-src/ 下 9 页，正文为中文）
CLASS3_UNDER20        = 237      （<20 CJK 字符，含 COMPLETE-TYPES.md 的 1 行代码注释 15 字、
                                  action-family.md 的 schema 注释 21 字 —— 均判正当保留）
```

> 与 boss brief 的读数（18,230 / 2,361 / 2,126 / 9 / ~229）差异 ≤7，系 HEAD 移动所致（boss 明示「当前 HEAD 会变动，每次现读」）。本线一切以现读为准。

**量它的命令**：`node tools/_verify/tmp/cjk-scan.mjs`（脚本落盘于 `tools/_verify/tmp/`，可重跑；注意 Windows 下 node 与 git-bash 的 `/tmp` 不是同一路径，脚本内一律用仓库相对路径）。

### 0.2 第 2 类 = 9 页清单（修复目标）

| 页面 | CJK 字符数 | 唯一类型名数 | 1.4.5 主文件缺失 |
|---|---|---|---|
| rendering.md | 1,287 | 276 | 2（rglSSR_fxnode, rglWater_body） |
| scene.md | 922 | 234 | 8 |
| physics.md | 582 | 126 | 4（rglNull_physics_engine_world, cloth_instance, cloth_simulation, cloth_collider） |
| animation.md | 453 | 76 | 2（rglAnim_node_movement, Anim_node_capture） |
| utilities.md | 322 | 73 | 1（FtlObject） |
| audio.md | 235 | 28 | 0 |
| mission.md | 205 | 26 | 1（Ship_visual_creator） |
| network.md | 187 | 20 | 0 |
| _index.md | 36 | 0（无类型清单） | — |

### 0.3 🔴 源树版本维（boss 已更正，本线实测确认）

- 9 页的符号**不在** `native-1.2.9/`（该树 .c 2,322,575 行 / .h 38,649 行；`rglString_base` 0 命中）。
- 9 页的符号**在** `native-1.4.5/`：845 个唯一类型名中 **813 个命中** 1.4.5 主文件（`rglString_base` 6,070 次）。
- **仓库里没有 1.3.15 的 native 树**；页面自述生成自 `tmp/native-1.3.15/`（见 `COMPLETE-TYPES.md` 页头，2026-04-09 生成），该目录已不存在。
- **口径限制（写入审计与页面）**：凡以 1.4.5 核实的断言，页面内标注「以 1.4.5 native 树核实」；不得把 1.4.5 证据说成 1.3.15 证据；1.3.15 无从核实的断言在台账逐条登记。
- **17 个唯一类型名在 1.4.5 主文件缺失**；其中 `rglGranite_scheduler` 在 1.4.5 `src/` 拆分中存在；**16 个双树（1.2.9 + 1.4.5）均无** ⇒ 按 boss 裁定 #3 判**真缺陷，需改写**，审计给两套读数。

### 0.4 页面生成属性（H0 相关，仅登记不处理）

9 页均带生成指纹（`Treat X as an entry point or data node…` 模板句、`// （占位示例已移除…）` 占位注释）。按用户 2026-08-24 裁定，它们本属「全量逐页手写重写」范围；**本线只做 CJK 修复（中文→英文）**，深度重写归 v1.3.15 en 树重写线。第 1 类 2,122 页同理：**本线不修**，只在审计登记归属。

---

## §1 修复计划（9 页）

- 派 2 个 worker 并行（并发 ≤2）：
  - **worker A**：rendering, scene, physics（大页，3 页）
  - **worker B**：animation, utilities, audio, mission, network, _index（6 页）
- 每页动作：中文正文→英文（非机翻，术语对齐 en 树）；title/description 改英文；类型名/签名/vftable 码块/链接逐一保留；事实以 `native-1.4.5/` 核实并标注；16 个双树缺失类型按真缺陷处理（改写或标注，审计登记）；修复后 CJK=0（或逐条说明正当保留）。
- H0：worker 逐页手写，**任何脚本不得写 content/** 正文**。

## §2 审计计划

- `tools/_verify/en-cjk-audit.md` + `tools/_verify/en-cjk-audit.tsv`：三类数量、逐条路径、判定依据、可重跑命令；第 1 类标注「属全量重写范围，本线不修」；每页标注核实树及与 1.3.15 的关系。

## §3 提交计划

- 文件级 pathspec 提交（`-m` 在 `--` 前）；批前/批后各跑一次 `node tools/audit-links.mjs`，BROKEN_LINKS 不得上升。

## §4 进度日志

- 2026-10-08：侦察完成（§0）；源树版本维已定（1.4.5 核实 / 1.3.15 无从核实）；16 个双树缺失类型已定位。下一步：派 2 个 worker 修 9 页。
- 2026-10-08：已派 2 个 worker（并发=2，符合上限）：
  - **worker-339 `native-fix-big`**（text-medium）：rendering / scene / physics（3 大页）
  - **worker-340 `native-fix-small`**（text-medium）：animation / utilities / audio / mission / network / _index（6 页）
  - 派单内容：H0 手写、事实以 native-1.4.5 核实并标注、16 个双树缺失类型按真缺陷处理（保留条目+逐页 unverifiable 注）、移除空 Usage Example 占位节、CJK→0。
  - 链接预检：9 页全部内链可解析（_index 35 条内链全通；8 个叶子页无链接）。
  - 扫描脚本与结果已落盘 `tools/_verify/tmp/cjk-scan.mjs` + `cjk-scan-result.json`（现读 HEAD `ac94cf7e2`：18,236 / 2,368 / C1=2,122 / C2=9 / C3=237）。
- 2026-10-08：**boss 裁定（#22535）——三条**：
  1. 「双树均缺」定性从「真缺陷」改为「**本环境不可核实**」：两棵树都不是 1.3.15 ⇒ 查不到 ≠ 不存在。**保留符号 + 必须标注「未核实」**（页面内一行注记或审计逐条登记，二选一或都做）；**不得静默保留**。
  2. `FtlObject` 大小写半修：真实符号 `ftlObject`（1.4.5 命中 280），标题也应是 `ftlObject`；若标题是有意保留的展示名则必须说明。**「大小写错配」单列为一个缺陷类别**（与「未锚定 grep 把合法当非法」同族）。
  3. 另 14 个（rendering 2 / scene 8 / physics 4）同样处理：保留 + 标注「本环境不可核实」。
- 2026-10-08：worker-340 交付 6 页（CJK=0），但复核发现 3 处需修：① `### FtlObject` 标题未改（代码块已改 `ftlObject`）；② animation.md 代码块 `Holster_script::vftable` 是错的（`Holster_script` 0 命中，应为 `Holster_anim_system`，1 命中）；③ 不可核实符号未在页面内标注。已续派修复。
- 2026-10-08：worker-339 **未交付**（CJK 仍 1287/922/582，只做了核实没改写）。已续派要求立即完成改写，并带上 boss 三条裁定。
- 等待两 worker 完成 → 独立验证（CJK=0、事实、链接、大小写一致）→ 审计报告 → 文件级 pathspec 提交。
- 2026-10-08：**全部完成**。worker-339 交付 rendering/scene/physics（CJK=0，类型名全保留，不可核实符号逐条标注）。两 worker 均已验证并关闭。
  - 提交：**`1b7ea5b57c`**（12 文件：9 页 + en-cjk-audit.md + en-cjk-audit.tsv + 本台账）。
  - 审计报告：`tools/_verify/en-cjk-audit.md` + `tools/_verify/en-cjk-audit.tsv`（2,359 行）。
  - audit-links 批后：BROKEN_LINKS=0，FILES_WITH_BROKEN=0。
  - 修复后 en 树 CJK 实测：2,368 → **2,359**（C1=2,122 / C2=0 / C3=237）。
