<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VoiceOverModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VoiceOverModel : MBGameModel<VoiceOverModel>`
**Base:** `MBGameModel<VoiceOverModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VoiceOverModel.cs`

## 概述

`VoiceOverModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<VoiceOverModel>(new MyVoiceOverModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSoundPathForCharacter
```csharp
public abstract string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)
```

### GetAccentClass
```csharp
public abstract string GetAccentClass(CultureObject culture, bool isHighClass)
```

## 使用示例

```csharp
// VoiceOverModel (Model) 的典型用法
Game.Current.ReplaceModel<VoiceOverModel>(new MyVoiceOverModel());
```

## 参见

- [完整类目录](../catalog)