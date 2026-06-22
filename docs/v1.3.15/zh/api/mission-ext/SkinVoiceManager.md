<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkinVoiceManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkinVoiceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class SkinVoiceManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

## 概述

`SkinVoiceManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName
```csharp
public static int GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName(string className)
```

### GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName
```csharp
public static void GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName(string className, int definitionIndices)
```

### GetName
```csharp
public TextObject GetName()
```

## 使用示例

```csharp
// SkinVoiceManager (Manager) 的典型用法
SkinVoiceManager.Current;
```

## 参见

- [完整类目录](../catalog)