---
title: API 参考 / API Reference
description: Bannerlord SDK API 完整参考 / Complete API reference for Bannerlord SDK
---
# API 参考 / API Reference

## 心智模型

先把 `API 参考` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

v1.3.15 版本的完整 API 参考文档，共 **4819** 个公开类型。目录页与深度页一起构成整站参考：目录负责完整索引，深度页负责开发者视角说明与用例。

Complete API reference for v1.3.15 — **4819** public types. Catalog pages provide full indexing, while deep-reference pages provide developer-facing explanations and examples.

---

## ↑ 上级导航 / Parent Navigation

- [🏠 首页 / Home](../../../) — 版本选择
- [🏗️ 架构总览 / Architecture](../architecture/) — SDK 大局观、模块地图、分层架构
- [⭐ SDK 总览 / SDK Overview](../architecture/sdk-overview) — 54 个模块的分层地图与 mod 入口速查
- [🗂️ 完整类目录 / Full Catalog](./catalog) — 4819 类型的总索引入口

## 🌳 树状导航 / Tree Navigation

按 SDK 分层架构组织，从底层基础库到上层战役系统。点击进入各领域目录。

```
Bannerlord SDK v1.3.15
├── 📚 Library 基础库 (201 类型, 100%)
│   └── TaleWorlds.Library — 数学/容器/序列化基座
├── ⚙️ System 系统基座 (246 类型, 100%)
│   └── TaleWorlds.Core.System — 事件/消息/任务调度
├── 📦 Core 核心数据 (321 类型, 100%)
│   └── TaleWorlds.Core — ObjectManager/MBObject/Equipment/ItemObject
├── 🔧 Engine 引擎 (154 类型, 100%)
│   └── TaleWorlds.Engine — Scene/NativeObject/资源管理
├── 🖥️ UI / Gauntlet (265 类型, 100%)
│   └── TaleWorlds.MountAndBlade.View — GauntletMovie/ScreenManager/ViewModel
├── 💾 Save-System 存档 (56 类型, 100%)
│   └── TaleWorlds.SaveSystem — SaveManager/SaveContext/LoadContext
├── ⚔️ MountAndBlade 战斗 (1644 类型, 100%)
│   ├── Mission — Agent/Formation/Team/Mission
│   └── Mission-Ext — MissionBehavior/AgentComponent
├── 🏰 Campaign 战役 (1829 类型, 100%)
│   ├── Campaign — MobileParty/Kingdom/Clan/Hero
│   └── Campaign-Ext — Settlement/PartyTemplate/Workshop
└── 🌐 平台服务 / Other (103 类型)
    ├── Localization — MBTextManager
    ├── Input — 输入系统
    └── Other — 杂项
```

## 🔀 同级导航 / Sibling Navigation

\| 同级页面 \| 用途 \|
\|---------\|------\|
\| [📋 完整类目录](./catalog) \| 4819 类型全表，按领域分类，标注文档状态 \|
\| [🏗️ 架构总览](../architecture/) \| SDK 分层、模块加载、存档原理 \|
\| [🔀 跨版本对比](../../../versions/) \| 1.3.0 → 1.3.15 → 1.4.5 类 API 差异 \|
\| [📖 开发指南](../guide/) \| UI/Mission/Campaign/Save 实战教程 \|

## ↓ 子级导航 / Child Navigation — API 领域目录

按 SDK 层次排序，每行标注类型数与文档覆盖率。

### 底层 — 基础库与系统

\| 领域 \| 类型数 \| 已文档 \| 覆盖率 \| 关键类 \| 进入 \|
\|------\|--------\|--------\|--------\|--------\|------\|
\| Library 基础库 \| 201 \| 201 \| 100% \| `MBList&lt;T&gt;`, `MathF`, `Common` \| [→ 目录](./catalog-library) \|
\| System 系统基座 \| 246 \| 246 \| 100% \| `MessageBroker`, `GameHandler` \| [→ 目录](./catalog-system) \|
\| Core 核心数据 \| 321 \| 321 \| 100% \| `MBObjectManager`, `Equipment`, `BasicCultureObject` \| [→](./core/) \|
\| Engine 引擎 \| 154 \| 154 \| 100% \| `Scene`, `NativeObject`, `GameEntity` \| [→](./engine/) \|

### 中层 — UI 与存档

\| 领域 \| 类型数 \| 已文档 \| 覆盖率 \| 关键类 \| 进入 \|
\|------\|--------\|--------\|--------\|--------\|------\|
\| UI / Gauntlet \| 265 \| 265 \| 100% \| `GauntletMovie`, `ScreenManager`, `ViewModel` \| [→](./gui/) \|
\| Save-System 存档 \| 56 \| 56 \| 100% \| `SaveManager`, `SaveAttributes`, `SaveContext` \| [→](./save-system/) \|

### 上层 — 战斗与战役

\| 领域 \| 类型数 \| 已文档 \| 覆盖率 \| 关键类 \| 进入 \|
\|------\|--------\|--------\|--------\|--------\|------\|
\| Mission 战斗 \| 1644 \| 1644 \| 100% \| `Agent`, `Formation`, `Team`, `Mission` \| [→](./mission/) \|
\| Mission-Ext 战斗扩展 \| — \| — \| — \| `MissionBehavior`, `AgentComponent` \| [→](./mission-ext/) \|
\| Campaign 战役 \| 1829 \| 1829 \| 100% \| `MobileParty`, `Kingdom`, `Clan`, `Hero` \| [→](./campaign/) \|
\| Campaign-Ext 战役扩展 \| — \| — \| — \| `Settlement`, `PartyTemplate`, `Workshop` \| [→](./campaign-ext/) \|

### 辅助 — 本地化、物品、输入

\| 领域 \| 类型数 \| 已文档 \| 覆盖率 \| 关键类 \| 进入 \|
\|------\|--------\|--------\|--------\|--------\|------\|
\| Items 物品 \| — \| — \| — \| `ItemObject`, `EquipmentElement` \| [→](./items/) \|
\| ViewModel \| — \| — \| — \| `ViewModel`, `DataSourceProperty` \| [→](./viewmodel/) \|
\| Localization 本地化 \| 21 \| 21 \| 100% \| `MBTextManager` \| [→](./localization/) \|
\| Input 输入 \| 19 \| 19 \| 100% \| 输入系统 \| [→ 目录](./catalog-input) \|

&gt; 💡 **开发者提示**: 全部 4819 个类型均已文档化。在 [完整类目录](./catalog) 中按领域查找名称，跨版本 API 差异见 [版本对比](../../../versions/)。

