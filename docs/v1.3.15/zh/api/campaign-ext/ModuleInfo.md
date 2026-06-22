<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleInfo

**命名空间:** TaleWorlds.ModuleManager
**模块:** TaleWorlds.ModuleManager
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ModuleInfo` 是 `TaleWorlds.ModuleManager` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; }` |
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `IsDefault` | `public bool IsDefault { get; }` |
| `IsRequiredOfficial` | `public bool IsRequiredOfficial { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `RequiredBaseVersion` | `public ApplicationVersion RequiredBaseVersion { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `FolderPath` | `public string FolderPath { get; }` |
| `Type` | `public ModuleType Type { get; }` |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory { get; }` |
| `IsNative` | `public bool IsNative { get; }` |


## 主要方法

### LoadWithFullPath

```csharp
public void LoadWithFullPath(string fullPath)
```

### ActivateModule

```csharp
public void ActivateModule()
```

### DeactivateModule

```csharp
public void DeactivateModule()
```

### UpdateVersionChangeSet

```csharp
public void UpdateVersionChangeSet()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)