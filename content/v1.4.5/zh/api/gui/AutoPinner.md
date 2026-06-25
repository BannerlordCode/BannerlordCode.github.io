---
title: "AutoPinner"
description: "AutoPinner 的自动生成类参考。"
---
# AutoPinner

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class AutoPinner : IDisposable`
**Base:** `IDisposable`
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native/AutoPinner.cs`

## 概述

`AutoPinner` 位于 `TaleWorlds.TwoDimension.Standalone.Native`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IntPtr
`public static implicit operator IntPtr(AutoPinner autoPinner)`

**用途 / Purpose:** **用途 / Purpose:** 调用 IntPtr 对应的操作。

```csharp
// 静态调用，不需要实例
AutoPinner.IntPtr(autoPinner);
```

### Dispose
`public void Dispose()`

**用途 / Purpose:** **用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 AutoPinner 实例
AutoPinner autoPinner = ...;
autoPinner.Dispose();
```

## 使用示例

```csharp
AutoPinner.IntPtr(autoPinner);
```

## 参见

- [本区域目录](../)