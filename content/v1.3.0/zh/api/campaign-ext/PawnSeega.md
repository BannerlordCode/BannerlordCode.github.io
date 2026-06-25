---
title: "PawnSeega"
description: "PawnSeega 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PawnSeega 实例
PawnSeega pawnSeega = ...;
pawnSeega.Reset();
```

### UpdateMoveBackAvailable
`public void UpdateMoveBackAvailable()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 move back available 的最新表示。

```csharp
// 先通过子系统 API 拿到 PawnSeega 实例
PawnSeega pawnSeega = ...;
pawnSeega.UpdateMoveBackAvailable();
```

### AISetMovedThisTurn
`public void AISetMovedThisTurn(bool moved)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AISetMovedThisTurn 对应的操作。

```csharp
// 先通过子系统 API 拿到 PawnSeega 实例
PawnSeega pawnSeega = ...;
pawnSeega.AISetMovedThisTurn(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PawnSeega pawnSeega = ...;
pawnSeega.Reset();
```

## 参见

- [本区域目录](../)