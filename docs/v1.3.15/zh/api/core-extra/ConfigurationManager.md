<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConfigurationManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConfigurationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ConfigurationManager`
**Base:** 无
**File:** `TaleWorlds.Library/ConfigurationManager.cs`

## 概述

`ConfigurationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### SetConfigurationManager
```csharp
public static void SetConfigurationManager(IConfigurationManager configurationManager)
```

### GetAppSettings
```csharp
public static string GetAppSettings(string name)
```

## 使用示例

```csharp
// ConfigurationManager (Manager) 的典型用法
ConfigurationManager.Current;
```

## 参见

- [完整类目录](../catalog)