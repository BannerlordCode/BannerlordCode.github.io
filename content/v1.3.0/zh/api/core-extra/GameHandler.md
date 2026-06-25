---
title: "GameHandler"
description: "GameHandler 的自动生成类参考。"
---
# GameHandler

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameHandler : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameHandler.cs`

## 概述

`GameHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GameHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBeforeSave
`public abstract void OnBeforeSave()`

**用途 / Purpose:** 在 「before save」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameHandler 实例
GameHandler gameHandler = ...;
gameHandler.OnBeforeSave();
```

### OnAfterSave
`public abstract void OnAfterSave()`

**用途 / Purpose:** 在 「after save」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameHandler 实例
GameHandler gameHandler = ...;
gameHandler.OnAfterSave();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameHandler instance = ...;
```

## 参见

- [本区域目录](../)