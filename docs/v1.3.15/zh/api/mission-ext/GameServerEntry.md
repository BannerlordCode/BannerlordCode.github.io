<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameServerEntry`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameServerEntry

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GameServerEntry` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public CustomBattleId Id { get; }` |
| `Address` | `public string Address { get; }` |
| `Port` | `public int Port { get; }` |
| `Region` | `public string Region { get; }` |
| `PlayerCount` | `public int PlayerCount { get; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; }` |
| `ServerName` | `public string ServerName { get; }` |
| `GameModule` | `public string GameModule { get; }` |
| `GameType` | `public string GameType { get; }` |
| `Map` | `public string Map { get; }` |
| `UniqueMapId` | `public string UniqueMapId { get; }` |
| `Ping` | `public int Ping { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; }` |
| `Permission` | `public int Permission { get; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; }` |
| `HostId` | `public PlayerId HostId { get; }` |
| `HostName` | `public string HostName { get; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; }` |


## 主要方法

### FilterGameServerEntriesBasedOnCrossplay

```csharp
public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry> serverList, bool hasCrossplayPrivilege)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)