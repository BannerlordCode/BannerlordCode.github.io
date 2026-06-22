<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyNotification`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyNotification

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`LobbyNotification` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Type` | `public NotificationType Type { get; set; }` |
| `Date` | `public DateTime Date { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; set; }` |


## 主要方法

### GetParametersAsString

```csharp
public string GetParametersAsString()
```

### GetTextObjectOfMessage

```csharp
public TextObject GetTextObjectOfMessage()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)