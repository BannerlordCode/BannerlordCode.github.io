---
title: "BeHostileAction"
description: "BeHostileAction 的自动生成战役动作参考。"
---
# BeHostileAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs`

BeHostileAction 是一组静态方法，用于在战役中以特定原因触发"BeHostile"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyHostileAction

```csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
```

**用途 / Purpose:** 将 hostile action 的效果应用到当前对象。

### ApplyMinorCoercionHostileAction

```csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 将 minor coercion hostile action 的效果应用到当前对象。

### ApplyMajorCoercionHostileAction

```csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 将 major coercion hostile action 的效果应用到当前对象。

### ApplyEncounterHostileAction

```csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 将 encounter hostile action 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, 100);
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/BeHostileAction.cs`（全文 199 行）。
**调用点：** 全树 19 处，其中 `ApplyEncounterHostileAction` 13 处、`ApplyMajorCoercionHostileAction` 3 处、`ApplyMinorCoercionHostileAction` 3 处。

`public static class BeHostileAction`（`BeHostileAction.cs:7`），**四个公开方法全部转调同一个 `private static void ApplyInternal(PartyBase attackerParty, PartyBase defenderParty, float value)`（`:15`）——那个 `float value` 是全部效果的倍乘系数。**

三个常量就是四个方法里三个包装器传的系数：`MinorCoercionValue = 1f`（`:9`）、`MajorCoercionValue = 2f`（`:11`）、`EncounterValue = 6f`（`:13`）。

### 典型用法

**本页上方「使用示例」里的 `ApplyHostileAction(attackerParty, defenderParty, 100)` 是一个会毁档的写法，建议直接忽略那一行。** 理由是 `ApplyInternal` 里七个系数全是 `value` 的倍数（`:21`-`:27`）：

```
num = (int)(-1f  * value)     // :21
relationChange  = (int)(-5f * value)   // :22
relationChange2 = (int)(-1f  * value)   // :23
num2            = (int)(-4f  * value)   // :24
relationChange3 = (int)(-4f  * value)   // :25
num3            = (int)(-10f * value)   // :26
num4            = (int)(-2f  * value)   // :27
```

**`value = 100` 会让关系变化变成 -1000、影响力变成 -1000。** 官方的量级是 1 / 2 / 6 三个档，**不要传两位数。**

**四个方法的守卫强度不一样，这是第二个坑：**

| 方法 | 守卫 | 行号 |
| --- | --- | --- |
| `ApplyHostileAction` | 判 null **且** `value.ApproximatelyEqualsTo(0f)` → `FailedAssert` 后**跳过** | `:151` / `:153`-`:156` |
| `ApplyMinorCoercionHostileAction` | 只判 null → `FailedAssert` 后跳过 | `:163` / `:165`-`:168` |
| `ApplyMajorCoercionHostileAction` | 同上 | `:175` / `:177`-`:180` |
| **`ApplyEncounterHostileAction`** | **不判 null**，只问 `EncounterModel.IsEncounterExemptFromHostileActions` | `:187` / `:189` |

**只有 encounter 版本会主动宣战**（`:195` 的 `DeclareWarAction.ApplyByPlayerHostility`）**并扣玩家关系 -10**（`:194`）——而那三行都被 `attackerParty == PartyBase.MainParty && 双方阵营不同 && 不在交战` 三重条件包着（`:192`）。**AI 之间调用不会宣战。**

**而 `ApplyHostileAction` 这个通用版全树零调用点。** 它存在的意义是给 mod 一个自定倍数的入口，**但守卫会在 value 为 0 时静默跳过——所以「传 0」不是「无操作」而是「断言 + 什么都不做」。**

```csharp
public static void HostilePreview(PartyBase attacker, PartyBase defender)
{
    bool exempt = Campaign.Current.Models.EncounterModel.IsEncounterExemptFromHostileActions(attacker, defender);
    Debug.Print("encounter exempt = " + exempt + " (gate at BeHostileAction.cs:189)", 0);
    if (defender.IsMobile && defender.MobileParty.MapFaction == null)
    {
        Debug.Print("defender has no MapFaction -> ApplyInternal returns at :17-:20", 0);
        return;
    }
    bool atWar = attacker.MapFaction.IsAtWarWith(defender.MapFaction);
    Debug.Print("atWar=" + atWar + " defenderIsSettlement=" + defender.IsSettlement, 0);
    Debug.Print("scales off value: 1 / 2 / 6 are the only sane inputs", 0);
}
```

**上例第二行那条早退是 `ApplyInternal` 的第一道门（`:17`-`:20`）——无阵营的流动方直接返回，一个关系都不会变。** 而 `:30`-`:35` 还有第二道：**己方在交战时打村庄会直接 return**（`:32` 的 `!defenderParty.Settlement.IsVillage || flag`）。

### 最容易踩的坑

- **本类 4 个公开方法里 3 个是 `FailedAssert` 后静默跳过、1 个（`ApplyEncounterHostileAction`）连 null 都不判。** 传 null 给 encounter 版不会断言、会在 `ApplyInternal` 里空引用崩溃；传 null 给另外三个只是断言加静默返回——**两种失败形态完全不同，排查时不要指望报错信息一致。**

- **`value` 是倍乘系数不是强度。** 官方只用 `1f`（`:171`）、`2f`（`:183`）、`6f`（`:191`）三档，且 `ApplyInternal` 里七个量（`:21`-`:27`）全按它放大。**传 `100` 会得到 -1000 级的关系与影响力变化。** 上方「使用示例」那行的 `100` 应视为笔误。

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)