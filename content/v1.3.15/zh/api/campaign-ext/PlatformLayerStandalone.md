---
title: "PlatformLayerStandalone"
description: "PlatformLayerStandalone 的自动生成类参考。"
---
# PlatformLayerStandalone

**Namespace:** psai.net
**Module:** psai.net
**Type:** `internal class PlatformLayerStandalone : IPlatformLayer`
**Base:** `IPlatformLayer`
**File:** `TaleWorlds.PSAI/net/PlatformLayerStandalone.cs`

## 概述

`PlatformLayerStandalone` 位于 `psai.net`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.net` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PlatformLayerStandalone 实例
PlatformLayerStandalone platformLayerStandalone = ...;
platformLayerStandalone.Initialize();
```

### Release
`public void Release()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PlatformLayerStandalone 实例
PlatformLayerStandalone platformLayerStandalone = ...;
platformLayerStandalone.Release();
```

### ConvertFilePathForPlatform
`public string ConvertFilePathForPlatform(string filepath)`

**用途 / Purpose:** 把「file path for platform」转换为另一种表示或类型。

```csharp
// 先通过子系统 API 拿到 PlatformLayerStandalone 实例
PlatformLayerStandalone platformLayerStandalone = ...;
var result = platformLayerStandalone.ConvertFilePathForPlatform("example");
```

### GetStreamOnPsaiSoundtrackFile
`public Stream GetStreamOnPsaiSoundtrackFile(string filepath)`

**用途 / Purpose:** 读取并返回当前对象中 「stream on psai soundtrack file」 的结果。

```csharp
// 先通过子系统 API 拿到 PlatformLayerStandalone 实例
PlatformLayerStandalone platformLayerStandalone = ...;
var result = platformLayerStandalone.GetStreamOnPsaiSoundtrackFile("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlatformLayerStandalone platformLayerStandalone = ...;
platformLayerStandalone.Initialize();
```

## 参见

- [本区域目录](../)