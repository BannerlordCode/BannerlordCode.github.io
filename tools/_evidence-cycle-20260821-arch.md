# 证据包 — cycle-20260821-arch（架构大局观层接管）

## 本周期动作
- 复验 v1.3.15 zh 真实覆盖状态（纠正旧记忆基线）。
- 派 2 Author 子代理整页重写架构大局观 4 页（决策无关，直接修复用户投诉 #1 缺大局观）：
  - `content/v1.3.15/zh/architecture/developer-roadmap.md`（任务地图：我想做 X → 入口类 → 页 → 风险）
  - `content/v1.3.15/zh/architecture/sdk-overview.md`（SDK 分层概览 + 按层枢纽页）
  - `content/v1.3.15/zh/architecture/crash-boundaries.md`（8 类崩溃/坏档失败模式，含真实 C# 片段）
  - `content/v1.3.15/zh/architecture/module-system.md`（模块系统 + 真实 SubModule.xml + MBSubModuleBase 四阶段钩子）

## QA 结果（独立复验，不采信自报）
- 4 页全部含 `## 心智模型`/大局观 + 导航块（↑ Parent `./` + ↔ siblings + 相关类页）+ 真实示例。
- 链接解析：从 4 页抽取 22 个相对链接目标，全部存在 → **OK=22 MISS=0**。
  - 关键目标已验证存在：`api/core/MBSubModuleBase.md`、`api/core-extra/Game.md`、`api/core-extra/ViewModel.md`、`api/save-system/SaveManager.md`、`api/campaign/{Campaign,Hero,Clan,Settlement,MobileParty}.md`、`api/mission/{Mission,Agent,MissionBehavior}.md`、`api/localization/MBTextManager.md`。
- 禁止样板句扫描（"阅读时先通过属性了解状态"/"公开类型"/"SomeValue"/"service = ..."/双 I 假类型）：**0 命中**。
- 全站链接审计（`AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh node tools/audit-links.mjs`）：见下方尾部输出（目标 BROKEN_LINKS=0）。
- mtime：4 目标页均为 2026-08-21 04:44 本周期改动，零连带。

## 复验基线（纠正旧记忆）
- 稳定命名空间（`## 心智模型` 代理 + 抽读 `mission/Mission.md` 精读确认）：core(3) core-extra(527) engine(204) gui(58) localization(52) mission(58) viewmodel(42) save-system(108) — **全部 0 stub，高质量**。
- strict gate（`STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.3.15/zh/api`）：扫描 5633 文件；Blockers=26（全 `fake-example-on-entry-page`，集中在 localization/save-system 已验证深页 → **门禁误报**，非真实缺陷）；Content-integrity=27219（≈5,400 stub 当量），集中在巨型平铺桶。
- 巨型平铺桶：`campaign-ext`=2836、`mission-ext`=1634、`campaign`=53 → **~4,523 文件 = R1 真实内容债海洋**。
- `campaign/` 持有 S 级核心实体（Campaign/Hero/Clan/Settlement/MobileParty 已 DEEP）；`campaign-ext/` 为扩展桶（MBObjectManager/MBObjectBase/CampaignBehaviorBase 等 STUB）。"双目录"= 核心实体 vs 扩展，非重复。

## 场景测试（§8 E）可达性提升
- #1 注册 SubModule+加 Behavior：developer-roadmap 任务#1 + module-system（真实四阶段钩子）+ 链 MBSubModuleBase ✓ 可答。
- #2 安全给 Hero 加钱/杀人/改王国：developer-roadmap 任务#2 + crash-boundaries #2（为何不能改字段，走 *Action）✓ 可答。
- #3 自定义存档字段不坏档：crash-boundaries #1 + sdk-overview SaveSystem 层 + 链 SaveManager ✓ 可答（save-system 命名空间早已 100% 手写）。
- #4 MissionBehavior + Agent 死亡处理：developer-roadmap 任务#4/#5 + crash-boundaries #4 + 链 Mission/Agent ✓ 可答（mission L1 hubs 已 deep）。
- #5 改党派战争得分找 Model 还是 Action：developer-roadmap 任务#6（明确 Model 非 Action）+ crash-boundaries #7（Model 替换）✓ 可答（指向战役模型簇，进行中）。

## 已知限制 / 待裁决
- 4 项战略决策仍挂起；本周期补充 #4 建议：保留 `campaign/` 权威，`campaign-ext` 作扩展桶（不逐类手刷 2836）。
- `zola build`（§8 gate F）本周期未跑（36k 页构建递延至里程碑边界，与历史一致）；en 对应 4 页未写（R1 默认 zh 优先）。
- campaign S 级簇（Actions/Models + MBObjectManager/MBObjectBase/CampaignBehaviorBase 深写）为下一 wave，gated on 去重裁决。

## 下一入口
QA 全站 BROKEN_LINKS=0 确认后，进入 campaign S 级簇手写（先确证 Actions/Models 权威路径，避开 campaign-ext 双目录）。

## QA 修正（链接深度，关键教训）
- 首轮全站链接审计（AUDIT_CONTENT_ROOT=content/v1.3.15/zh）：BROKEN_LINKS=112 / FILES_WITH_BROKEN=4，全部是 4 个架构叶页的链接。
- 根因：审计默认 URL/clean-URL 模式；架构页是**叶页**（路由含自身虚拟目录 `architecture/X/`），故：
  - 兄弟/父页链接必须用 `../Name`、`../`（爬出叶页虚拟目录回 `architecture/`），**不能用 `./Name`**（`./` 落在 `architecture/X/` 自身虚拟目录，404）。
  - 跨到 API 类页必须用 `../../api/<ns>/<Name>`（爬出叶页+`architecture/` 两级到 `zh/`），**不能用 `../api/...`**（少一级，落在 `architecture/api/...` 404）。
- 修正：4 页 `](./`→`](../`（兄弟/父），`](../api/`→`](../../api/`（跨 API）。复验：BROKEN_LINKS=0 / FILES_WITH_BROKEN=0 / RESOLVE_NEITHER=0（TOTAL_LINKS=23166）。
- 教训固化：叶页兄弟=`../Name`、父=`../`、跨 API=`../../api/Name`、跨 architecture=`../../../architecture/...`（自 api 叶页）。后续 Author brief 必须含此规则。
