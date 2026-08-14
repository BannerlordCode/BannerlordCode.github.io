---
title: "Track"
description: "Track 的自动生成类参考。"
---
# Track

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Track : ILocatable<Track>, IInteractablePoint`
**Base:** `ILocatable<Track>`
**File:** `TaleWorlds.CampaignSystem/Track.cs`

## 概述

`Track` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GetPosition2D` | `public Vec2 GetPosition2D { get; set; }` |
| `Size` | `public int Size { get; set; }` |
| `IsDetected` | `public bool IsDetected { get; set; }` |
| `IsPointer` | `public bool IsPointer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsExpired` | `public bool IsExpired { get; }` |
| `IsAlive` | `public bool IsAlive { get; }` |
| `Scale` | `public float Scale { get; }` |

## 主要方法

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**用途 / Purpose:** 检查当前对象是否满足 party interact 的前置条件。

```csharp
// 先通过子系统 API 拿到 Track 实例
Track track = ...;
var result = track.CanPartyInteract(mobileParty, 0);
```

### GetPartyTypeEnum
`public static Track.PartyTypeEnum GetPartyTypeEnum(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 party type enum 的结果。

```csharp
// 静态调用，不需要实例
Track.GetPartyTypeEnum(party);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Track 实例
Track track = ...;
track.Reset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Track track = ...;
track.CanPartyInteract(mobileParty, 0);
```

## 参见

- [本区域目录](../)