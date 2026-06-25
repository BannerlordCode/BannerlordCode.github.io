---
title: "MBWorkspace"
description: "MBWorkspace 的自动生成类参考。"
---
# MBWorkspace

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBWorkspace<T>`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBWorkspace.cs`

## 概述

`MBWorkspace` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartUsingWorkspace
`public T StartUsingWorkspace()`

**用途 / Purpose:** **用途 / Purpose:** 启动using workspace流程或状态机。

```csharp
// 先通过子系统 API 拿到 MBWorkspace 实例
MBWorkspace mBWorkspace = ...;
var result = mBWorkspace.StartUsingWorkspace();
```

### StopUsingWorkspace
`public void StopUsingWorkspace()`

**用途 / Purpose:** **用途 / Purpose:** 停止using workspace流程或状态机。

```csharp
// 先通过子系统 API 拿到 MBWorkspace 实例
MBWorkspace mBWorkspace = ...;
mBWorkspace.StopUsingWorkspace();
```

### GetWorkspace
`public T GetWorkspace()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 workspace 的结果。

```csharp
// 先通过子系统 API 拿到 MBWorkspace 实例
MBWorkspace mBWorkspace = ...;
var result = mBWorkspace.GetWorkspace();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBWorkspace mBWorkspace = ...;
mBWorkspace.StartUsingWorkspace();
```

## 参见

- [本区域目录](../)