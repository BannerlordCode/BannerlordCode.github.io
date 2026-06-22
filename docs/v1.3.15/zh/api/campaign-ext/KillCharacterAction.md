<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KillCharacterAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KillCharacterAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs`

KillCharacterAction 是一组静态方法，用于在战役中以特定原因触发"KillCharacter"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByOldAge

```csharp
public static void ApplyByOldAge(Hero victim, bool showNotification = true)
```

**用途 / Purpose:** old age。

### ApplyByWounds

```csharp
public static void ApplyByWounds(Hero victim, bool showNotification = true)
```

**用途 / Purpose:** wounds。

### ApplyByBattle

```csharp
public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)
```

**用途 / Purpose:** battle。

### ApplyByMurder

```csharp
public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)
```

**用途 / Purpose:** murder。

### ApplyInLabor

```csharp
public static void ApplyInLabor(Hero lostMother, bool showNotification = true)
```

**用途 / Purpose:** in labor。

### ApplyByExecution

```csharp
public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**用途 / Purpose:** execution。

### ApplyByExecutionAfterMapEvent

```csharp
public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
```

**用途 / Purpose:** execution after map event。

### ApplyByRemove

```csharp
public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)
```

**用途 / Purpose:** remove。

### ApplyByDeathMark

```csharp
public static void ApplyByDeathMark(Hero victim, bool showNotification = false)
```

**用途 / Purpose:** death mark。

### ApplyByDeathMarkForced

```csharp
public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)
```

**用途 / Purpose:** death mark forced。

### ApplyByPlayerIllness

```csharp
public static void ApplyByPlayerIllness()
```

**用途 / Purpose:** player illness。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
KillCharacterAction.ApplyByOldAge(victim, false);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)