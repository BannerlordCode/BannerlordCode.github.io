<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SoundProperties`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundProperties

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SoundProperties` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `RegisteredStateSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredStateSounds { get; }` |
| `RegisteredEventSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredEventSounds { get; }` |


## 主要方法

### AddStateSound

```csharp
public void AddStateSound(string state, AudioProperty audioProperty)
```

### AddEventSound

```csharp
public void AddEventSound(string state, AudioProperty audioProperty)
```

### FillFrom

```csharp
public void FillFrom(SoundProperties soundProperties)
```

### GetEventAudioProperty

```csharp
public AudioProperty GetEventAudioProperty(string eventName)
```

### GetStateAudioProperty

```csharp
public AudioProperty GetStateAudioProperty(string stateName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)