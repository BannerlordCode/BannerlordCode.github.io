<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameKeyContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyContext

**命名空间:** TaleWorlds.InputSystem
**模块:** TaleWorlds.InputSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameKeyContext` 是 `TaleWorlds.InputSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GameKeyCategoryId` | `public string GameKeyCategoryId { get; }` |
| `Type` | `public GameKeyContext.GameKeyContextType Type { get; }` |
| `RegisteredGameKeys` | `public MBReadOnlyList<GameKey> RegisteredGameKeys { get; }` |
| `RegisteredHotKeys` | `public Dictionary<string, HotKey>.ValueCollection RegisteredHotKeys { get; }` |
| `RegisteredGameAxisKeys` | `public Dictionary<string, GameAxisKey>.ValueCollection RegisteredGameAxisKeys { get; }` |


## 主要方法

### GetHotKey

```csharp
public HotKey GetHotKey(string hotKeyId)
```

### GetGameKey

```csharp
public GameKey GetGameKey(int gameKeyId)
```

### GetHotKeyId

```csharp
public string GetHotKeyId(string hotKeyId)
```

### GetHotKeyId

```csharp
public string GetHotKeyId(int gameKeyId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)