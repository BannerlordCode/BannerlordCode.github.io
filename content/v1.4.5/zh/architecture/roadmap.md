---
title: "开发者路线图 — v1.4.5"
description: "v1.4.5 文档的按任务地图：找到你想做的东西，顺着依赖链找到需要的类与簇。也包含 H0–H10 重建波次与状态。"
---
# 开发者路线图（v1.4.5）

一份按任务组织的文档地图。找到你想做的东西，顺着依赖链找到需要的类与簇。

## ↑ 父级导航

- [架构索引](./)
- [崩溃边界](.././crash-boundary)
- [文档契约](.././doc-contract)

## 重建波次（H0–H10）

| 波次 | 范围 | 状态 |
|------|------|------|
| H0 | 契约 + 退役生成器 + 清单/覆盖率工具 | ✅ 完成 |
| H1 | 双向导航树 + 每模块心智图 + 路线图/崩溃边界 | 🟡 进行中 |
| H2 | L0–L1 枢纽深页（约 40）：MBSubModuleBase、Game、MBObject*、Saveable*、Campaign*、Mission*、Agent、ViewModel | 🟡 已播种（本周期 5 页） |
| H3 | L2 领域实体（约 30）：Hero、MobileParty、Settlement、Clan、Kingdom、MapEvent、TroopRoster、ItemObject | ⬜ |
| H4 | L3 Actions：家族簇 + 全手写条目；约 20 个关键深页 | ⬜ |
| H5 | L4 Models：地图 + 约 40 优先深页 + 其余条目 | ⬜ |
| H6 | L5 内容：Quest/Issue/Menu/Conversation/Encounter | ⬜ |
| H7 | L6 UI 模式 + 关键 VM/View | ⬜ |
| H8 | L7 SandBox/Native 范例 | ⬜ |
| H9 | L9 长尾按命名空间清零 | ⬜ |
| H10 | 指南对齐 + BROKEN_LINKS=0 + stub 特征=0 + 覆盖率=0 | ⬜ |

## 按意图（从这里开始）

- 注册 SubModule 并加 Behavior → `MBSubModuleBase` → `CampaignBehaviorBase` → `CampaignGameStarter`
- 安全改变世界 → `*Action` 家族（H4）
- 每 tick 读/算 → `*Model`（H5）或 `CampaignBehaviorBase`
- 战斗逻辑 → `Mission` + `MissionBehavior`（H2/H7）
- UI 面板 → `ViewModel` + `GauntletLayer`（H7）
- 持久化自定义数据 → `SaveableTypeDefiner` + `SyncData`（H0/H2）
- 防崩/防坏档 → [崩溃边界](.././crash-boundary)

## 参见

- [架构索引](./)
- [崩溃边界](.././crash-boundary)
- [文档契约](.././doc-contract)
