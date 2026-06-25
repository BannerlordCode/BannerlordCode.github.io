---
title: "PlayerMoveTroopEvent"
description: "PlayerMoveTroopEvent 的自动生成类参考。"
---
# PlayerMoveTroopEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerMoveTroopEvent : EventBase`
**Base:** `EventBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PlayerMoveTroopEvent.cs`

## 概述

`PlayerMoveTroopEvent` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Troop` | `public CharacterObject Troop { get; }` |
| `Amount` | `public int Amount { get; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; }` |
| `FromSide` | `public PartyScreenLogic.PartyRosterSide FromSide { get; }` |
| `ToSide` | `public PartyScreenLogic.PartyRosterSide ToSide { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
PlayerMoveTroopEvent instance = ...;
```

## 参见

- [本区域目录](../)