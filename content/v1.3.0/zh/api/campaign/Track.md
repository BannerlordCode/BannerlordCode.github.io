---
title: "Track"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Track`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 判断当前对象是否可以执行 `party interact`。

### GetPartyTypeEnum
`public static Track.PartyTypeEnum GetPartyTypeEnum(MobileParty party)`

**用途 / Purpose:** 获取 `party type enum` 的当前值。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var value = new Track();
value.CanPartyInteract(mobileParty, 0);
```

## 参见

- [完整类目录](../catalog)