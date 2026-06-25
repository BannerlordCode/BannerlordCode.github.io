---
title: "NarrativeMenu"
description: "NarrativeMenu 的自动生成类参考。"
---
# NarrativeMenu

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenu`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenu.cs`

## 概述

`NarrativeMenu` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNarrativeMenuCharacterArgsDelegate
`public delegate List<NarrativeMenuCharacterArgs> GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 读取并返回当前对象中 「narrative menu character args delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 NarrativeMenu 实例
NarrativeMenu narrativeMenu = ...;
var result = narrativeMenu.GetNarrativeMenuCharacterArgsDelegate(culture, "example", characterCreationManager);
```

### AddNarrativeMenuOption
`public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)`

**用途 / Purpose:** 将 「narrative menu option」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 NarrativeMenu 实例
NarrativeMenu narrativeMenu = ...;
narrativeMenu.AddNarrativeMenuOption(narrativeMenuOption);
```

### RemoveNarrativeMenuOption
`public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)`

**用途 / Purpose:** 从当前容器或状态中移除 「narrative menu option」。

```csharp
// 先通过子系统 API 拿到 NarrativeMenu 实例
NarrativeMenu narrativeMenu = ...;
narrativeMenu.RemoveNarrativeMenuOption(narrativeMenuOption);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NarrativeMenu narrativeMenu = ...;
narrativeMenu.GetNarrativeMenuCharacterArgsDelegate(culture, "example", characterCreationManager);
```

## 参见

- [本区域目录](../)