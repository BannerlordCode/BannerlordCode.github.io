---
title: "AgeModel"
description: "角色年龄阶段阈值与地点年龄限制的抽象模型，供战役系统查询角色所处年龄段。"
---
# AgeModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class AgeModel : MBGameModel<AgeModel>`
**基类：** `MBGameModel<AgeModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`（声明见第 7 行）

## 概述

`AgeModel` 是战役系统中负责"年龄阶段"判定的抽象组件模型。它定义了一组只读属性，每个属性对应一个年龄阈值（单位：游戏年），例如从婴儿变为儿童的年龄、从儿童变为青少年的年龄、英雄成年礼的年龄、进入老年的年龄等。此外还提供了一个方法 `GetAgeLimitForLocation`，用于查询某个角色在特定地点（如竞技场、酒馆等）所允许的最小和最大年龄范围。

该类型位于 `ComponentInterfaces` 命名空间下，属于战役系统组件化架构的一部分：游戏通过 `MBGameModel<T>` 基类实现模型的热替换与多态派发，`AgeModel` 就是其中一个可替换的模型槽位。默认实现为 `DefaultAgeModel`，模组开发者可以通过替换该模型来调整整个游戏的年龄节奏。

## 心智模型

把 `AgeModel` 想象成一张"年龄对照表"。游戏内部每个角色都有一个整数年龄值（`CharacterObject.Age`），而 `AgeModel` 就是那张把整数年龄映射到"人生阶段"的对照表：

- 年龄 < `BecomeInfantAge` → 婴儿
- `BecomeInfantAge` ≤ 年龄 < `BecomeChildAge` → 幼儿/儿童
- `BecomeChildAge` ≤ 年龄 < `BecomeTeenagerAge` → 少年
- `BecomeTeenagerAge` ≤ 年龄 < `HeroComesOfAge` → 青少年
- `HeroComesOfAge` ≤ 年龄 < `MiddleAdultHoodAge` → 青年（可结婚、可参战）
- `MiddleAdultHoodAge` ≤ 年龄 < `BecomeOldAge` → 中年
- `BecomeOldAge` ≤ 年龄 < `MaxAge` → 老年
- 年龄 ≥ `MaxAge` → 超出上限，角色通常已死亡或不可用

这张表是**全局唯一**的——所有角色共享同一套阈值。如果模组想改变"几岁算成年"，不需要修改每个角色的逻辑，只需要替换 `AgeModel` 的实现即可。

`GetAgeLimitForLocation` 则是一个例外机制：某些地点（如竞技场）可能对参与者有额外的年龄限制。该方法通过 `out` 参数返回最小和最大年龄，`additionalTags` 参数允许调用方传入额外的标签来进一步细化限制条件。

## 怎么用

1. **读取当前模型**：通过 `Campaign.Current.Models` 获取当前的 `AgeModel` 实例（该属性在 `Campaign.cs:529` 声明，类型是 `GameModels`）。
2. **查询年龄阶段**：读取 `BecomeChildAge`、`HeroComesOfAge` 等属性，与角色的 `Age` 值比较，判断角色处于哪个阶段。
3. **查询地点限制**：调用 `GetAgeLimitForLocation` 获取某地点的年龄限制，用于 UI 显示或逻辑判断。
4. **自定义模型**：继承 `AgeModel` 并实现所有抽象成员，然后通过模型替换机制注入到战役中。

## 关键成员

| 成员 | 行号 | 用途 |
|------|------|------|
| `public abstract class AgeModel : MBGameModel<AgeModel>` | `AgeModel.cs:7` | 类型声明；继承 `MBGameModel<AgeModel>` 使其成为可替换的战役模型组件 |
| `public abstract int BecomeInfantAge { get; }` | `AgeModel.cs:11` | 返回从新生儿变为婴儿的年龄阈值 |
| `public abstract int BecomeChildAge { get; }` | `AgeModel.cs:15` | 返回从婴儿变为儿童的年龄阈值 |
| `public abstract int BecomeTeenagerAge { get; }` | `AgeModel.cs:19` | 返回从儿童变为青少年的年龄阈值 |
| `public abstract int HeroComesOfAge { get; }` | `AgeModel.cs:23` | 返回英雄成年礼的年龄阈值，达到此年龄后角色可结婚、可独立行动 |
| `public abstract int BecomeOldAge { get; }` | `AgeModel.cs:27` | 返回从中年变为老年的年龄阈值 |
| `public abstract int MiddleAdultHoodAge { get; }` | `AgeModel.cs:31` | 返回从青年变为中年的年龄阈值 |
| `public abstract int MaxAge { get; }` | `AgeModel.cs:35` | 返回角色的最大年龄上限，超过此值角色通常死亡 |
| `public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | `AgeModel.cs:38` | 查询指定角色在特定地点的年龄限制范围，通过 `out` 参数返回最小和最大年龄 |

## 真实示例

```csharp
// 获取当前战役的年龄模型
AgeModel ageModel = Campaign.Current.Models.AgeModel;

// 查询英雄成年礼的年龄
int comesOfAge = ageModel.HeroComesOfAge;

// 判断某个角色是否已成年
bool isAdult = hero.Age >= ageModel.HeroComesOfAge;

// 查询某角色在竞技场的年龄限制
int minAge, maxAge;
ageModel.GetAgeLimitForLocation(hero, out minAge, out maxAge, "arena");

// 根据地点限制过滤可用角色
if (hero.Age >= minAge && hero.Age <= maxAge)
{
    // 允许进入竞技场
}
```

## 参见
- [DefaultAgeModel](../DefaultAgeModel)
- [Campaign](../../campaign/Campaign)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
