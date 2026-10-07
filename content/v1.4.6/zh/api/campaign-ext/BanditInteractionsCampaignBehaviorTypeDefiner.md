---
title: "BanditInteractionsCampaignBehaviorTypeDefiner"
description: "土匪交互 Behavior 的存档类型定义器：把 PlayerInteraction 等嵌套枚举注册进对象系统。"
---
# BanditInteractionsCampaignBehaviorTypeDefiner

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditInteractionsCampaignBehaviorTypeDefiner : SaveableTypeDefiner`（嵌套于 `BanditInteractionsCampaignBehavior`）
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BanditInteractionsCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BanditInteractionsCampaignBehaviorTypeDefiner` 是土匪交互 Behavior 的**存档类型定义器**。它继承 `SaveableTypeDefiner`，把 `BanditInteractionsCampaignBehavior.PlayerInteraction` 这个嵌套枚举注册进对象系统，使交互记录能跨存档存活。

它不含游戏逻辑 —— 它是**纯基础设施**，服务于宿主 Behavior 的数据持久化。

## 心智模型

**它是「登记表」，不是「系统」。**

- 它只回答：「土匪交互用到的自定义类型，在存档里怎么表示？」
- 构造函数里的 `base(70000)` 是这个 Definer 的**类型编号**。
- `DefineEnumTypes()` 里每调一次 `AddEnumDefinition`，就多一个可被存档的枚举类型。

**与 `AllianceCampaignBehaviorTypeDefiner` 的对比**：那个注册的是**结构类型**（`DefineStructTypes`），这个注册的是**枚举类型**（`DefineEnumTypes`）—— 因为交互记录是有限的几种取值，用枚举更合适。

## 怎么用

### 怎么拿到

**通常不需要直接用它。** 它由对象系统在加载存档时自动实例化并调用。

### 典型用法

mod 若要给土匪交互加自己的类型，正确做法是：

1. 在 `BanditInteractionsCampaignBehavior` 里加字段
2. 在这个 Definer 的 `DefineEnumTypes()` 里加一行 `AddEnumDefinition(typeof(你的枚举), 编号, null)`

```csharp
// 在 BanditInteractionsCampaignBehaviorTypeDefiner.DefineEnumTypes() 里追加
base.AddEnumDefinition(typeof(BanditInteractionsCampaignBehavior.MyInteraction), 2, null);
```

### 坑

- **编号不能重复**。同一 Definer 内必须唯一。
- **只加不改**。已发布存档里类型编号是固定的。
- **它不管逻辑**。注册类型不等于实现功能。

## 关键成员

- `BanditInteractionsCampaignBehaviorTypeDefiner()`（`BanditInteractionsCampaignBehavior.cs:689`）—— 构造函数，`base(70000)` 传入类型编号。
- `DefineEnumTypes()`（`BanditInteractionsCampaignBehavior.cs:695`）—— 注册 `PlayerInteraction` 枚举（编号 1，`:697`）。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 读档后，对象系统会重建 BanditInteractionsCampaignBehavior 及其嵌套枚举
var behavior = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();

// PlayerInteraction 枚举现在可以安全读写
var interaction = behavior.PlayerInteraction;   // 已注册的类型，读档后不会丢
```

## 参见

- [`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) —— 本 Definer 的宿主 Behavior。
- [`../AllianceCampaignBehaviorTypeDefiner`](../AllianceCampaignBehaviorTypeDefiner) —— 同族的另一个 Definer，注册的是结构类型。
- [`../_index`](../_index) —— `campaign-ext` 桶全类型索引。

## 导航

- 同桶：[`../BanditInteractionsCampaignBehavior`](../BanditInteractionsCampaignBehavior) · [`../BanditSpawnCampaignBehavior`](../BanditSpawnCampaignBehavior) · [`../BannerCampaignBehavior`](../BannerCampaignBehavior)
- 父索引：[`../_index`](../_index)
