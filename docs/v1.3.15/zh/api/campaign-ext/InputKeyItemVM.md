<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputKeyItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Input
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`InputKeyItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Input` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GameKey` | `public GameKey GameKey { get; }` |
| `HotKey` | `public HotKey HotKey { get; }` |
| `KeyID` | `public string KeyID { get; set; }` |
| `KeyName` | `public string KeyName { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |


## 主要方法

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetForcedVisibility

```csharp
public void SetForcedVisibility(bool? isVisible)
```

### CreateFromGameKey

```csharp
public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)
```

### CreateFromHotKey

```csharp
public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)
```

### CreateFromHotKeyWithForcedName

```csharp
public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)
```

### CreateFromGameKeyWithForcedName

```csharp
public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)
```

### CreateFromForcedID

```csharp
public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)