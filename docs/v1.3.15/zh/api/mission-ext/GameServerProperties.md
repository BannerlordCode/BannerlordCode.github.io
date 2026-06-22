<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameServerProperties`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameServerProperties

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GameServerProperties` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `Region` | `public string Region { get; set; }` |
| `GameModule` | `public string GameModule { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Map` | `public string Map { get; set; }` |
| `UniqueMapId` | `public string UniqueMapId { get; set; }` |
| `GamePassword` | `public string GamePassword { get; set; }` |
| `AdminPassword` | `public string AdminPassword { get; set; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; set; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; set; }` |
| `IsOfficial` | `public bool IsOfficial { get; set; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; set; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; set; }` |
| `Permission` | `public int Permission { get; set; }` |
| `HostId` | `public PlayerId HostId { get; set; }` |
| `HostName` | `public string HostName { get; set; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; set; }` |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules { get; set; }` |


## 主要方法

### CheckAndReplaceProxyAddress

```csharp
public void CheckAndReplaceProxyAddress(IReadOnlyDictionary<string, string> proxyAddressMap)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)