# 证据 · 2026-08-18 周期（wave #B — 5 个中枢 L2 战役实体手写 + 全站链接净零）

## 本周期完成

### 1. 中枢战役实体手写（5/5 deep_pass）
对 `content/v1.4.5/zh/api/campaign/` 下 5 个战役骨架类型逐页核验，全部通过 `classifyPage`（`handwritten-policy.mjs`）深度达标：

| 页 | 状态 | 心智模型 | 依赖/参见链接 | 真实 C# 示例 | 备注 |
|----|------|---------|--------------|-------------|------|
| Hero.md | DEEP_PASS | ✓ >80 | 6 | ✓ | 文件日期 Aug 14，已合规，本周期复验 |
| MobileParty.md | DEEP_PASS | ✓ >80 | 17 | ✓ | 本周期整页重写（03:12） |
| Settlement.md | DEEP_PASS | ✓ >80 | 9 | ✓ | 本周期整页重写（03:11） |
| Clan.md | DEEP_PASS | ✓ >80 | 20 | ✓ | 本周期整页重写（03:11） |
| Kingdom.md | DEEP_PASS | ✓ >80 | 13 | ✓ | 本周期整页重写（03:12） |

验收命令：`node tools/_verify_waveB.mjs` → `SUMMARY: 5/5 deep_pass`（exit 0）。

### 2. 链接净零（BROKEN_LINKS=0）
首轮全站 `AUDIT_MODE=url node tools/audit-links.mjs` 暴露 **BROKEN_LINKS=123 / 6 文件**。
经定位，这 6 个文件均修改于本周期 **02:02–02:06**（wave #B 之前、同一自动化周期内的早期子波由其他 Author agent 写出），**不属于 wave #B 的 5 个目标页**。缺陷两类：

- **兄弟链接误用 `./X/`**（页渲染为目录，`../` 才回退到同级目录）：`AlleyModel / JournalLog / PartyAgentOrigin / PartyGroupAgentOrigin / SimpleAgentOrigin / BasicCharacterObject` 中各 `./Sibling/` → `../Sibling`。修复 89 处（脚本 `_fix_sibling_links.mjs`，每处目标均核验存在）。
- **跨顶级目录 `../Dir/` 少一层 `../`**（页在 `campaign/` 或 `core-extra/`，需 `../../` 才抵达 `mission/ · campaign-ext/ · core/ · core-extra/ · campaign/`）：同上 3 个文件中的 `../mission/... · ../campaign-ext/... · ../core/... · ../core-extra/... · ../campaign/...` → `../../...`。修复 34 处（脚本 `_fix_crossdir_links.mjs`，仅对“当前坏 + 加一层后好”的链接动手，兄弟链接不动）。

末轮复验：`tools/_audit_links_waveB3.log` → `FILES=38652 TOTAL_LINKS=123786 BROKEN_LINKS=0 FILES_WITH_BROKEN=0 RESOLVE_NEITHER=0`（exit 0）。

### 3. 纠正此前一处误判
此前我误以为 `campaign-ext/actions/` 才是 Action 页位置、从而判定 Agent 的 `../../campaign-ext/DeclarXXAction` 链接断链。已用 `find` 核实：Action 页直接落在 `content/v1.4.5/zh/api/campaign-ext/` 下（`DeclareWarAction.md · MakePeaceAction.md · ChangeOwnerOfSettlementAction.md · DestroyPartyAction.md · AddHeroToPartyAction.md · EnterSettlementAction.md · LeaveSettlementAction.md · ChangeRulingClanAction.md · DestroyKingdomAction.md · ChangeKingdomAction.md · GiveGoldAction.md · ChangeClanInfluenceAction.md · ChangeClanLeaderAction.md · CampaignAgentComponent.md` 等均存在）。故 Agent 的 `../../campaign-ext/DeclarXXAction` 链接 **有效**，最终链接审计 `BROKEN_LINKS=0` 已印证。

### 4. Hero 拖尾斜杠链接无害
Hero.md 使用了 `../../campaign-ext/GiveGoldAction/`（带尾斜杠），与 Settlement/Clan/MobileParty/Kingdom 的无斜杠写法不一致。解码 `audit-links.mjs`：`resolveTarget` 会以 `.replace(/[\\/]+$/,'')` 剥离尾斜杠，再 `existsAsPage` 优先查 `target + '.md'`。故 `GiveGoldAction/` 与 `GiveGoldAction` 解析到同一页，**不会断链**（已在 `_check_waveB_links.mjs` 路由语义下验证 187 链接 0 坏）。为一致性考虑，未来新页建议统一无斜杠，但本周期不强制改 Hero（避免无谓改动）。

## 健康 / 未完成 / 待用户决策
- 内容口径（权威版 v1.4.5/zh/api）：基线仍约 `stub≈8,960(95.1%)`、`deep_pass≈372+`（本波 5 中枢实体现已全部 deep_pass）。结构口径 R1 gap=0 / 质量 blockers=0（CI 绿）。
- 三项战略决策仍挂起（本周期未单边推进）：①`audit:quality:strict` 接 CI 硬门禁；②自动化每周期并行手写 N 篇节奏；③`r1-coverage-report` 的 covered 改判为「内容分类器达标」。
- 本周期新发现：早期子波写出的 6 个页面存在系统性 `./` 与跨目录 `../` 链接格式错误；已修复并复验净零。建议后续 Author agent 模板强制「同级 `../X`、跨顶级 `../../X`、无尾斜杠」约定。

## 下一 cycle 入口
- 维持 5 并行 Author agent 节奏，推进 campaign-ext / mission-ext 长尾高 ROI 类型 + Actions/Models 家族页收口。
- 复用 `tools/_verify_waveB.mjs`（分类）与 `tools/_fix_sibling_links.mjs` + `tools/_fix_crossdir_links.mjs`（链接净零）。
- 等用户就三项决策表态后再调整 CI/节奏/覆盖口径。
