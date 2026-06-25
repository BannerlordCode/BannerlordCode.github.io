---
title: "PatrolPartyComponent"
description: "PatrolPartyComponent 的自动生成类参考。"
---
# PatrolPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PatrolPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PatrolPartyComponent.cs`

## 概述

`PatrolPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `PatrolPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNaval` | `public bool IsNaval { get; }` |

## 主要方法

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default component banner 的结果。

```csharp
// 先通过子系统 API 拿到 PatrolPartyComponent 实例
PatrolPartyComponent patrolPartyComponent = ...;
var result = patrolPartyComponent.GetDefaultComponentBanner();
```

### CreatePatrolParty
`public static MobileParty CreatePatrolParty(string stringId, CampaignVec2 position, float spawnRadius, Settlement homeSettlement, PartyTemplateObject template)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 patrol party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
PatrolPartyComponent.CreatePatrolParty("example", position, 0, homeSettlement, template);
```

### SortRoster
`public void SortRoster()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SortRoster 对应的操作。

```csharp
// 先通过子系统 API 拿到 PatrolPartyComponent 实例
PatrolPartyComponent patrolPartyComponent = ...;
patrolPartyComponent.SortRoster();
```

## 使用示例

```csharp
var component = agent.GetComponent<PatrolPartyComponent>();
```

## 参见

- [本区域目录](../)