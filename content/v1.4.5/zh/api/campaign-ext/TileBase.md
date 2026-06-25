---
title: "TileBase"
description: "TileBase 的自动生成类参考。"
---
# TileBase

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public abstract class TileBase`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.Tiles/TileBase.cs`

## 概述

`TileBase` 位于 `SandBox.BoardGames.Tiles`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Tiles` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `ValidMoveDecal` | `public BoardGameDecal ValidMoveDecal { get; }` |

## 主要方法

### Reset
`public virtual void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TileBase 实例
TileBase tileBase = ...;
tileBase.Reset();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 TileBase 实例
TileBase tileBase = ...;
tileBase.Tick(0);
```

### SetVisibility
`public void SetVisibility(bool isVisible)`

**用途 / Purpose:** 为 visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TileBase 实例
TileBase tileBase = ...;
tileBase.SetVisibility(false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TileBase instance = ...;
```

## 参见

- [本区域目录](../)