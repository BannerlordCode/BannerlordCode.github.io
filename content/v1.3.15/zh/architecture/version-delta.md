---
title: 版本差异 / Version Delta
description: Bannerlord v1.3.0 / v1.3.15 / v1.4.5 模块差异、破坏性 API 变化与迁移检查清单
---
# 版本差异 — 模块对照与迁移指南

> 迁移 mod 时先看**模块边界**，再看**类级 API 差异**。本页给模块边界；类级细节见 [🔀 跨版本类对比](../../../../versions/)。

---

## ↑ Parent Navigation

- [🏠 首页 / Home](../../)
- [🏗️ 架构总览 / Architecture](./)
- [⭐ SDK 总览](../sdk-overview/)

## 🔀 Sibling Navigation

| 页面 | 解决什么问题 |
|------|------------|
| [SDK 总览](../sdk-overview/) | 模块地图 |
| [模块系统](../module-system/) | 生命周期与加载机制 |
| [存档系统](../save-system/) | 自定义数据持久化 |
| [跨版本类对比](../../../../versions/) | Hero、Settlement、Mission 等逐类差异 |

---

## 模块数量

| 版本 | TaleWorlds 模块数 | .cs 文件 | 类型数 | 备注 |
|------|------------------|---------|--------|------|
| v1.3.0 | 31 | 4596 | 5306 | 含 SandBox/StoryMode 玩法源码 |
| v1.3.15 | 54 | 5196 | 5811 | SaveSystem 独立；平台服务拆分 |
| v1.4.5 | 65 (DLL) | 2361* | 2523* | 玩法模块源码重新可见 |

> *v1.4.5 计数仅反映反编译玩法模块；核心 TaleWorlds.* 以 DLL 分发。

---

## v1.3.0 → v1.3.15

### 新增重点模块

- `TaleWorlds.SaveSystem` — 存档独立模块
- `TaleWorlds.ObjectSystem` — MBObjectManager/ObjectSystem 基座
- `TaleWorlds.ModuleManager` — 模块加载/依赖
- `TaleWorlds.PlatformService.*`—— Steam/Epic/GOG 平台抽象
- `TaleWorlds.NavigationSystem` — 寻路系统独立

### 淡出/合并

- `SandBox`、`StoryMode` 在 1.3.15 源码包中未单独提供，玩法逻辑并入 CampaignSystem/MountAndBlide。
- `TaleWorlds.MountAndBlade.GauntletUI` / `.View` 部分合并。

### 对 mod 的影响

1. **引用更新**：添加 `TaleWorlds.SaveSystem.dll`。
2. **生命周期不变**：`MBSubModuleBase` 钩子保持兼容。
3. **ObjectSystem**：从 `TaleWorlds.Core` 附近移到独立模块，引用路径变化。

---

## v1.3.15 → v1.4.5

### 新增重点模块

- `TaleWorlds.CampaignSystem.FastMode` — 战役加速/批处理
- `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` — 生死系统 VM
- `TaleWorlds.MountAndBlade.CustomBattle` — 自定义战斗
- `TaleWorlds.MountAndBlade.Multiplayer*` — 多人模式整体拆分
- `TaleWorlds.MountAndBlade.Platform.PC` — PC 平台层
- `Modules.SandBox` / `Modules.StoryMode` — 玩法源码重新可见

### 移除模块

- `TaleWorlds.MountAndBlade.GauntletUI.CodeGenerator`
- `TaleWorlds.MountAndBlide.Launcher`（保留 `.Library`/`.Steam`）
- `TaleWorlds.MountAndBlade.SaveSystem.CodeGenerator`
- `TaleWorlds.MountAndBlide.SteamWorkshop`

---

## 类级破坏性变化速览（1.3.15 → 1.4.5）

详见 [跨版本类对比](../../../../versions/)。

| 类 | 移除/重命名 | 迁移方向 |
|----|------------|----------|
| [`MobileParty`](../../../../versions/MobileParty/) | `GetHeroPartyRole`, `RemoveHeroPartyRole` | 使用新的 FirstMate/Navigator API |
| [`Clan`](../../../../versions/Clan/) | `CommanderLimit` | 改为 `WarPartyLimit` |
| [`Kingdom`](../../../../versions/Kingdom/) | `LastArmyCreationDay`, `HasCalledToWar` | 军队创建逻辑重构 |
| [`Mission`](../../../../versions/Mission/) | `GetBattleSizeOffset`, `GetBattleSizeFactor` | 战斗规模计算重构 |
| [`Formation`](../../../../versions/Formation/) | `GetDetachmentOrDefault` 等 | 分队 API 重构 |
| [`Settlement`](../../../../versions/Settlement/) | `NumberOfLordPartyAt` | 领主队伍计数迁移 |
| [`IssueBase`](../../../../versions/IssueBase/) | `GetAlternativeSolutionSkill(Hero)` | 替代解法机制变更 |

### 相对稳定的类（跨版本安全）

[`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/)、[`QuestBase`](../../../../versions/QuestBase/)、[`MissionBehavior`](../../../../versions/MissionBehavior/)、[`ItemObject`](../../../../versions/ItemObject/)、[`Town`](../../../../versions/Town/)、[`Village`](../../../../versions/Village/)、`Campaign`、`CampaignTime`。

---

## 迁移检查清单

### 从 v1.3.0 → v1.3.15

- [ ] 添加 `TaleWorlds.SaveSystem` DLL 引用。
- [ ] 将旧的 `MBSaveLoad` 调用迁移到 `SaveManager`。
- [ ] 检查 `TaleWorlds.ObjectSystem`、`TaleWorlds.ScreenSystem` 等新模块引用。
- [ ] 旧的 XML 加载方式不变，`MBObjectManager.RegisterObject` 签名基本一致。

### 从 v1.3.15 → v1.4.5

- [ ] 多人/Gauntlet/View 程序集路径变化，核对 `.csproj` 引用。
- [ ] 检查 `MobileParty` 角色、`Clan.CommanderLimit`、`Kingdom.HasCalledToWar` 等破坏性变更。
- [ ] `SandBox`/`StoryMode` 源码可见，可直接参考 native-1.4.5 模块实现。
- [ ] 存档格式稳定，但要注意新增 `[SaveableField]` ID 的唯一性。

---

## 迁移建议

- **新 mod**：推荐以 **v1.3.15** 为主文档版本，源码完整、API 稳定。
- **面向 v1.4.5**：重点处理多人/UI 模块拆分和破坏性类变更。
- **存档兼容**：不同版本的 `.sav` 一般**不通用**；跨版本需在 mod 描述中注明。

---

## 参见

- [SDK 总览](../sdk-overview/)
- [模块系统](../module-system/)
- [存档系统](../save-system/)
- [🔀 跨版本类对比（逐类 API 差异）](../../../../versions/)
