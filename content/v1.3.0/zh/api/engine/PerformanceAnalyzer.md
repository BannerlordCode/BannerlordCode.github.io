---
title: "PerformanceAnalyzer"
description: "PerformanceAnalyzer 的自动生成类参考。"
---
# PerformanceAnalyzer

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class PerformanceAnalyzer`
**Base:** 无
**File:** `TaleWorlds.Engine/PerformanceAnalyzer.cs`

## 概述

`PerformanceAnalyzer` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Start
`public void Start(string name)`

**用途 / Purpose:** **用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 PerformanceAnalyzer 实例
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Start("example");
```

### End
`public void End()`

**用途 / Purpose:** **用途 / Purpose:** 调用 End 对应的操作。

```csharp
// 先通过子系统 API 拿到 PerformanceAnalyzer 实例
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.End();
```

### FinalizeAndWrite
`public void FinalizeAndWrite(string filePath)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FinalizeAndWrite 对应的操作。

```csharp
// 先通过子系统 API 拿到 PerformanceAnalyzer 实例
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.FinalizeAndWrite("example");
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 PerformanceAnalyzer 实例
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Tick(0);
```

### AddFps
`public void AddFps(float fps, float main, float renderer)`

**用途 / Purpose:** **用途 / Purpose:** 将 fps 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PerformanceAnalyzer 实例
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.AddFps(0, 0, 0);
```

### Write
`public void Write(XmlNode node, XmlDocument document)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的数据写入目标位置。

```csharp
// 先通过子系统 API 拿到 PerformanceAnalyzer 实例
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Write(node, document);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PerformanceAnalyzer performanceAnalyzer = ...;
performanceAnalyzer.Start("example");
```

## 参见

- [本区域目录](../)