---
title: "ClientApplicationConfiguration"
description: "ClientApplicationConfiguration 的自动生成类参考。"
---
# ClientApplicationConfiguration

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class ClientApplicationConfiguration`
**Base:** 无
**File:** `TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs`

## 概述

`ClientApplicationConfiguration` 位于 `TaleWorlds.Diamond.ClientApplication`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.ClientApplication` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `InheritFrom` | `public string InheritFrom { get; set; }` |
| `Clients` | `public string Clients { get; set; }` |
| `SessionProviderType` | `public SessionProviderType SessionProviderType { get; set; }` |
| `Parameters` | `public ParameterContainer Parameters { get; set; }` |

## 主要方法

### GetDefaultConfigurationFromFile
`public static string GetDefaultConfigurationFromFile()`

**用途 / Purpose:** 读取并返回当前对象中 default configuration from file 的结果。

```csharp
// 静态调用，不需要实例
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

### SetDefaultConfigurationCategory
`public static void SetDefaultConfigurationCategory(string category)`

**用途 / Purpose:** 为 default configuration category 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ClientApplicationConfiguration.SetDefaultConfigurationCategory("example");
```

### FillFrom
`public void FillFrom(string configurationName)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 ClientApplicationConfiguration 实例
ClientApplicationConfiguration clientApplicationConfiguration = ...;
clientApplicationConfiguration.FillFrom("example");
```

### FillFrom
`public void FillFrom(string configurationCategory, string configurationName)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 ClientApplicationConfiguration 实例
ClientApplicationConfiguration clientApplicationConfiguration = ...;
clientApplicationConfiguration.FillFrom("example", "example");
```

## 使用示例

```csharp
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

## 参见

- [本区域目录](../)