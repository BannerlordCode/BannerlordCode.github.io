---
title: "BannerDebugInfo"
description: "BannerDebugInfo 的自动生成类参考。"
---
# BannerDebugInfo

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BannerDebugInfo`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/BannerDebugInfo.cs`

## 概述

`BannerDebugInfo` 位于 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateManual
`public static BannerDebugInfo CreateManual(string sourceName)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 manual 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BannerDebugInfo.CreateManual("example");
```

### CreateWidget
`public static BannerDebugInfo CreateWidget(string sourceName)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 widget 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BannerDebugInfo.CreateWidget("example");
```

### CreateName
`public string CreateName()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 name 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 BannerDebugInfo 实例
BannerDebugInfo bannerDebugInfo = ...;
var result = bannerDebugInfo.CreateName();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BannerDebugInfo 实例
BannerDebugInfo bannerDebugInfo = ...;
var result = bannerDebugInfo.ToString();
```

## 使用示例

```csharp
BannerDebugInfo.CreateManual("example");
```

## 参见

- [本区域目录](../)