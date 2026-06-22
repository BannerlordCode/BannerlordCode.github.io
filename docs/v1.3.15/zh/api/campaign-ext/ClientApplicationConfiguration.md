<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClientApplicationConfiguration`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientApplicationConfiguration

**命名空间:** TaleWorlds.Diamond.ClientApplication
**模块:** TaleWorlds.Diamond
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClientApplicationConfiguration` 是 `TaleWorlds.Diamond.ClientApplication` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static string GetDefaultConfigurationFromFile()
```

### SetDefaultConfigurationCategory

```csharp
public static void SetDefaultConfigurationCategory(string category)
```

### FillFrom

```csharp
public void FillFrom(string configurationName)
```

### FillFrom

```csharp
public void FillFrom(string configurationCategory, string configurationName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)