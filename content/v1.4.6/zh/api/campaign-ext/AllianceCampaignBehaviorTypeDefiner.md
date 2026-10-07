---
title: "AllianceCampaignBehaviorTypeDefiner"
description: "联盟 Behavior 的存档类型定义器：把 Alliance 与 CallToWarAgreement 两个嵌套类型注册进对象系统，使联盟数据能跨存档存活。"
---
# AllianceCampaignBehaviorTypeDefiner

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AllianceCampaignBehaviorTypeDefiner : SaveableTypeDefiner`（嵌套于 `AllianceCampaignBehavior`）
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AllianceCampaignBehaviorTypeDefiner` 是联盟 Behavior 的**存档类型定义器**。它继承 `SaveableTypeDefiner`，作用只有一个：把联盟系统用到的嵌套类型（`Alliance`、`CallToWarAgreement`）注册进对象系统，让这些数据在存读档时被正确识别和重建。

它不含任何游戏逻辑 —— 没有字段、没有事件、没有决策。它是**纯基础设施**，服务于 `AllianceCampaignBehavior` 的数据持久化。

## 心智模型

把它想成**户籍登记处**，不是「联盟系统」。

- 它只回答一个问题：「联盟相关的自定义类型，在存档里怎么表示？」
- 构造函数里的 `base(312270)` 是这个 Definer 的**类型编号** —— 对象系统用它区分不同的 Definer。
- `DefineStructTypes()` 里每调一次 `AddStructDefinition`，就多一个可被存档的嵌套类型。

**为什么需要它**：Bannerlord 的对象系统不会自动序列化所有 C# 类型。自定义的嵌套类型必须显式注册，否则读档时会被当成未知数据丢弃。`TypeDefiner` 就是这份登记表。

## 怎么用

### 怎么拿到

**通常不需要直接用它。** 它由对象系统在加载存档时自动实例化并调用，mod 一般不直接引用。

### 典型用法

mod 若要给联盟系统加自己的存档字段，正确做法是：

1. 在 `AllianceCampaignBehavior` 里加一个 `public` 字段
2. 在这个 Definer 的 `DefineStructTypes()` 里加一行 `AddStructDefinition(typeof(你的类型), 编号, null)`

```csharp
// 在 AllianceCampaignBehaviorTypeDefiner.DefineStructTypes() 里追加
base.AddStructDefinition(typeof(AllianceCampaignBehavior.MyCustomData), 3, null);
```

### 坑

- **编号不能重复**。`AddStructDefinition` 的第二个参数是类型编号，同一 Definer 内必须唯一，且不要与游戏其他 Definer 冲突。
- **只加不改**。已发布的存档里类型编号是固定的，事后改编号会导致旧存档读不出来。
- **它不管逻辑**。注册类型不等于实现功能 —— 读写逻辑仍要在 `AllianceCampaignBehavior.SyncData` 里手写。

## 关键成员

- `AllianceCampaignBehaviorTypeDefiner()`（`AllianceCampaignBehavior.cs:739`）—— 构造函数，`base(312270)` 传入类型编号。
- `DefineStructTypes()`（`AllianceCampaignBehavior.cs:745`）—— 注册两个嵌套结构类型：`Alliance`（编号 1，`:747`）与 `CallToWarAgreement`（编号 2，`:748`）。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 读档后，对象系统会重建 AllianceCampaignBehavior 及其嵌套类型
// 前提：这些类型已在 AllianceCampaignBehaviorTypeDefiner 里注册过
AllianceCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<AllianceCampaignBehavior>();

// 联盟数据现在可以安全读写
var alliance = behavior.Alliance;   // 已注册的类型，读档后不会丢
```

## 参见

- [`../AllianceCampaignBehavior`](../AllianceCampaignBehavior) —— 本 Definer 的宿主 Behavior，联盟系统的实际逻辑都在它那里。
- [`../MBObjectBase`](../MBObjectBase) —— 所有可保存实体的公共基类，理解存档对象模型的起点。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) · [`../BanditSpawnCampaignBehavior`](../BanditSpawnCampaignBehavior) · [`../BannerCampaignBehavior`](../BannerCampaignBehavior)
- 父索引：[`../_index`](../_index)
