<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClientApplicationConfiguration`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientApplicationConfiguration

**命名空间:** TaleWorlds.Diamond.ClientApplication
**模块:** TaleWorlds.Diamond
**类型:** `public class ClientApplicationConfiguration`
**领域:** campaign-ext

## 概述

`ClientApplicationConfiguration` 位于 `TaleWorlds.Diamond.ClientApplication`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 获取 `default configuration from file` 的当前值。

### SetDefaultConfigurationCategory
`public static void SetDefaultConfigurationCategory(string category)`

**用途 / Purpose:** 设置 `default configuration category` 的值或状态。

### FillFrom
`public void FillFrom(string configurationName)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### FillFrom
`public void FillFrom(string configurationCategory, string configurationName)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
