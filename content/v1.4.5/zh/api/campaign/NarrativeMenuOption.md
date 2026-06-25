---
title: "NarrativeMenuOption"
description: "NarrativeMenuOption 的自动生成类参考。"
---
# NarrativeMenuOption

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class NarrativeMenuOption`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuOption.cs`

## 概述

`NarrativeMenuOption` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnCondition
`public bool OnCondition(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 在 condition 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
var result = narrativeMenuOption.OnCondition(characterCreationManager);
```

### OnSelect
`public void OnSelect(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 在 select 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.OnSelect(characterCreationManager);
```

### OnConsequence
`public void OnConsequence(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 在 consequence 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.OnConsequence(characterCreationManager);
```

### SetOnCondition
`public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)`

**用途 / Purpose:** **用途 / Purpose:** 为 on condition 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.SetOnCondition(onCondition);
```

### SetOnSelect
`public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)`

**用途 / Purpose:** **用途 / Purpose:** 为 on select 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.SetOnSelect(onSelect);
```

### SetOnConsequence
`public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)`

**用途 / Purpose:** **用途 / Purpose:** 为 on consequence 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.SetOnConsequence(onConsequence);
```

### ApplyFinalEffects
`public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)`

**用途 / Purpose:** **用途 / Purpose:** 将 final effects 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuOption 实例
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.ApplyFinalEffects(characterCreationContent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NarrativeMenuOption narrativeMenuOption = ...;
narrativeMenuOption.OnCondition(characterCreationManager);
```

## 参见

- [本区域目录](../)