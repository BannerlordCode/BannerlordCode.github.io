---
title: "GameTextManager"
description: "GameTextManager 的自动生成类参考。"
---
# GameTextManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextManager`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameTextManager.cs`

## 概述

`GameTextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameTextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |

## 主要方法

### GetGameText
`public GameText GetGameText(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 game text 的结果。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
var result = gameTextManager.GetGameText("example");
```

### AddGameText
`public GameText AddGameText(string id)`

**用途 / Purpose:** **用途 / Purpose:** 将 game text 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
var result = gameTextManager.AddGameText("example");
```

### TryGetText
`public bool TryGetText(string id, string variation, out TextObject text)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get text 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
var result = gameTextManager.TryGetText("example", "example", text);
```

### FindText
`public TextObject FindText(string id, string variation = null)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的text。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
var result = gameTextManager.FindText("example", "example");
```

### FindAllTextVariations
`public IEnumerable<TextObject> FindAllTextVariations(string id)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的all text variations。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
var result = gameTextManager.FindAllTextVariations("example");
```

### LoadGameTexts
`public void LoadGameTexts()`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 game texts。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
gameTextManager.LoadGameTexts();
```

### LoadDefaultTexts
`public void LoadDefaultTexts()`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 default texts。

```csharp
// 先通过子系统 API 拿到 GameTextManager 实例
GameTextManager gameTextManager = ...;
gameTextManager.LoadDefaultTexts();
```

## 使用示例

```csharp
var manager = GameTextManager.Current;
```

## 参见

- [本区域目录](../)