---
title: "BrushFactory"
description: "BrushFactory 的自动生成类参考。"
---
# BrushFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushFactory`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`

## 概述

`BrushFactory` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Brushes` | `public IEnumerable<Brush> Brushes { get; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BrushFactory 实例
BrushFactory brushFactory = ...;
brushFactory.Initialize();
```

### LoadBrushFile
`public void LoadBrushFile(string name)`

**用途 / Purpose:** 从持久化存储或流中读取 brush file。

```csharp
// 先通过子系统 API 拿到 BrushFactory 实例
BrushFactory brushFactory = ...;
brushFactory.LoadBrushFile("example");
```

### GetBrush
`public Brush GetBrush(string name)`

**用途 / Purpose:** 读取并返回当前对象中 brush 的结果。

```csharp
// 先通过子系统 API 拿到 BrushFactory 实例
BrushFactory brushFactory = ...;
var result = brushFactory.GetBrush("example");
```

### SaveBrushAs
`public bool SaveBrushAs(string name, Brush brush)`

**用途 / Purpose:** 将 brush as 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 BrushFactory 实例
BrushFactory brushFactory = ...;
var result = brushFactory.SaveBrushAs("example", brush);
```

### CheckForUpdates
`public void CheckForUpdates()`

**用途 / Purpose:** 检查for updates在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 BrushFactory 实例
BrushFactory brushFactory = ...;
brushFactory.CheckForUpdates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushFactory brushFactory = ...;
brushFactory.Initialize();
```

## 参见

- [本区域目录](../)