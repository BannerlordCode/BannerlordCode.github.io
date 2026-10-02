---
title: "campaign-ext 桶：战役的扩展契约与对象身份"
description: "TaleWorlds.ObjectSystem 与 TaleWorlds.CampaignSystem 的五个子命名空间（CampaignBehaviors / ComponentInterfaces / GameComponents / Conversation / Issues）落在这个桶：Behavior 管理器、模型接口与默认实现、对话与议题系统、对象注册表。已手写 3 张类页。"
---
# campaign-ext 桶：战役的扩展契约与对象身份

这个桶对应两类源码命名空间。一是 `bannerlord-1.4.6/TaleWorlds.ObjectSystem/`——整个对象系统只有 15 个文件，但它决定了一切战役实体怎么被登记、怎么跨存档引用。二是 `TaleWorlds.CampaignSystem` 的五个子命名空间：`CampaignBehaviors`（167 个文件）、`ComponentInterfaces`（126）、`GameComponents`（124）、`Conversation`（117）、`Issues`（49）。这五条更长前缀规则写在权威映射 `tools/_dir-map-canonical.json` 里，作用是把**契约与官方实现**从 [campaign](../campaign/) 的数据与运行时里剥出来。

> 纠偏：权威映射里还留着两条指向 `TaleWorlds.CampaignSystem` 下**并不存在的子命名空间**的前缀规则，1.4.6 源码全树 grep 0 命中，所以本页不把它们算进桶。沙盒的行为在顶层 `SandBox` 程序集里（走 [sandbox](../sandbox) 桶），不在 `TaleWorlds.CampaignSystem` 命名空间下。

**为什么源码目录叫 `CampaignSystem`、文档桶却叫 `campaign-ext`**：因为 mod 作者真正在这块干的事只有两类——**实现一个接口**（自己的 `ICampaignBehavior`、自己的 `PartySizeLimitModel`、自己的 `IssueBase`）或者**读懂一个接口在做什么**（游戏为什么这么判、这个默认值从哪来）。这两件事的入口类型几乎全在这个桶，而它们的数据结构在 campaign 桶。

## 已手写的类页（3 张）

- [MBObjectBase](./MBObjectBase) — 所有可保存实体的公共基类：持有 `StringId` / `Id`，承载注册、初始化与读档三段回调。`Hero`、`Settlement` 都由它派生，扩展点也主要长在它身上。
- [MBObjectManager](./MBObjectManager) — 全局对象注册表：按类型与 StringId 登记所有 `MBObjectBase` 实例，负责 XML 定义加载、引用解析与读档后的对象图重建。
- [MBGUID](./MBGUID) — 对象系统在存档里认出「这是同一个对象」的唯一凭据：一个 32 位无符号整数，被刻意切成两段，低位是类型内的递增序号、高位是类型编号。它同时被三个体系依赖——对象系统拿它当字典键、存档系统把它注册成基础类型、实体基类把标识属性声明成这个类型，于是**跨对象引用在存档里存的是一个 4 字节整数而不是对象内容**。

## 尚未撰写的部分

下列类型在 1.4.6 源码里存在（命名空间已逐个核对），但**还没有类页**。注意规模：`ComponentInterfaces` 有 126 个模型接口，`GameComponents` 有 124 个对应的默认实现，写清单时按「接口 + 默认实现成对出现」来读，不要当成 250 个独立知识点。

| 命名空间 | 待写类型 | mod 什么时候需要 |
| --- | --- | --- |
| `TaleWorlds.ObjectSystem` | `SaveableObjectSystemTypeDefiner`、`MbObjectXmlInformation`、`ObjectSystemException`、`MBTypeNotRegisteredException`、`MBTypeMismatchException`、`MBIllegalRegisterException`、`MBInvalidReferenceException`、`MBOutOfRangeException`、`MBTooManyRegisteredTypesException`、`MBCanNotCreatePresumedObjectException` | 动态注册可加载类型；读懂对象系统抛的每一种异常 |
| `.CampaignBehaviors` | `CampaignBehaviorManager` | 想知道 Behavior 的注册顺序与优先级规则时；诊断「我的 Behavior 没被调用」 |
| `.ComponentInterfaces` | `PartySizeLimitModel`、`ClanTierModel`、`PartyNavigationModel`、`SettlementFoodModel`（同命名空间另有 122 个同类接口） | 要改数值规则时，先读懂对应接口的语义再实现 |
| `.GameComponents` | `DefaultPartySizeLimitModel`（同命名空间另有 123 个 `Default*Model` 实现） | 想知道游戏默认值怎么算出来的 |
| `.Conversation`（含 `.Tags` / `.Persuasion`） | `ConversationManager`、`ConversationSentence`、`ConversationSentenceOption`、`CampaignMapConversation`、`ConversationHelper`、`ConversationTag`、`ConversationToken`、`Persuasion`、`PersuasionAttempt` | 自定义地图对话流程、说服判定、对话条件标签 |
| `.Issues` | `IssueManager`、`IssueBase`、`IssueEffect`、`PotentialIssueData`、`IssueCoolDownData` | 给城镇 / 领主加自定义议题（issue），也就是「他们需要什么」这套系统 |

## 与邻桶的分工

- [campaign](../campaign/) — 行为要操作的数据都在那边：本桶的 `ICampaignBehavior` 挂在 [CampaignBehaviorBase](../campaign/CampaignBehaviorBase) 上，事件源是 [CampaignEvents](../campaign/CampaignEvents)，实体继承 [MBObjectBase](./MBObjectBase)。
- [save-system](../save-system/) — 存档字段的真正落盘方；`MBObjectManager` 读档后的对象图恢复与它互相回调。
- [core-extra](../core-extra/) — `GameModel` / `GameModelsManager` 这层通用注册机制，战役层的模型实现挂在那套机制上。

## 参见

- ↑ [API 首页](../) — 全部 9 个桶的入口表
- ↔ [模块地图](../../architecture/module-map) — 七条子域前缀规则与桶名的对应关系
- ↑ [中文版本首页](../../)
- ↑ [v1.4.6 版本首页](../../../)
