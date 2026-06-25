---
title: "CharacterCreationState"
description: "CharacterCreationState 的自动生成类参考。"
---
# CharacterCreationState

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationState : PlayerGameState`
**Base:** `PlayerGameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/CharacterCreationState.cs`

## 概述

`CharacterCreationState` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CharacterCreationManager` | `public CharacterCreationManager CharacterCreationManager { get; }` |
| `Handler` | `public ICharacterCreationStateHandler Handler { get; set; }` |

## 主要方法

### FinalizeCharacterCreationState
`public void FinalizeCharacterCreationState()`

**用途 / Purpose:** 获取或更新 「finalize character creation state」 的状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationState 实例
CharacterCreationState characterCreationState = ...;
characterCreationState.FinalizeCharacterCreationState();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterCreationState 实例
CharacterCreationState characterCreationState = ...;
characterCreationState.Refresh();
```

### OnStageActivated
`public void OnStageActivated(CharacterCreationStageBase stage)`

**用途 / Purpose:** 在 「stage activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterCreationState 实例
CharacterCreationState characterCreationState = ...;
characterCreationState.OnStageActivated(stage);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationState characterCreationState = ...;
characterCreationState.FinalizeCharacterCreationState();
```

## 参见

- [本区域目录](../)