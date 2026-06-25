---
title: "PawnSeega"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PawnSeega`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PawnSeega

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnSeega : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnSeega.cs`

## 概述

`PawnSeega` 位于 `SandBox.BoardGames.Pawns`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Pawns` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPlaced` | `public override bool IsPlaced { get; }` |
| `MovedThisTurn` | `public bool MovedThisTurn { get; }` |
| `PrevX` | `public int PrevX { get; set; }` |
| `PrevY` | `public int PrevY { get; set; }` |

## 主要方法

### Reset
`public override void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### UpdateMoveBackAvailable
`public void UpdateMoveBackAvailable()`

**用途 / Purpose:** 更新 `move back available` 的状态或数据。

### AISetMovedThisTurn
`public void AISetMovedThisTurn(bool moved)`

**用途 / Purpose:** 处理 `a i set moved this turn` 相关逻辑。

## 使用示例

```csharp
var value = new PawnSeega();
value.Reset();
```

## 参见

- [完整类目录](../catalog)