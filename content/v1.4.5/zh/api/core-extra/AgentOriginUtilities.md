---
title: "AgentOriginUtilities"
description: "两个纯静态推断函数：GetDefaultTraitsMask 把 IAgentOriginBase 的四个 bool 与是否骑乘合成一个 TroopTraitsMask，GetDefaultTroopTraits 则直接扫 BasicCharacterObject 的战斗装备前 5 个槽位与护甲总值 24f 阈值，替三种 IAgentOriginBase 实现做样板推断。"
---

# AgentOriginUtilities

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentOriginUtilities`
**Base:** 无
**File:** `TaleWorlds.Core/AgentOriginUtilities.cs`

## 概述

`AgentOriginUtilities` 是 agent 来源体系里的**推断层**。[IAgentOriginBase](../IAgentOriginBase) 要求每个来源实现类回答「这单位有没有盾、有没有矛、有没有投掷武器、有没有重甲」；自己回答要么重复三遍，要么漏。`AgentOriginUtilities` 把这套推断抽成两个静态函数，让 `SimpleAgentOrigin`、`PartyAgentOrigin`、`PartyGroupAgentOrigin`、`BasicBattleAgentOrigin` 四个实现全部退化成一行转发。

它承担的是**「从一份静态数据推出战斗特征」的环节**，而且这两个函数是**互补而非重复**的：`GetDefaultTroopTraits` 从**角色的战斗装备**出发推断（正向：从数据到特征），`GetDefaultTraitsMask` 从**一个已经填好特征的 origin** 出发打包成位掩码（反向：从特征到位集）。前者被四个 origin 的**构造器**调用，后者被四个 origin 的 `GetTraitsMask()` 调用。**注意 `AgentOriginUtilities` 本身不是 `static class`——源码写的是 `public class`，所以它可以 `new`，但 `new` 出来什么也做不了。**

## 心智模型

把它当成**「从装备表反推兵种标签」的翻译器**，输入是装备，输出是特征。判断什么时候该用它，问一句：**我手上的信息只有一份 `BasicCharacterObject` 的战斗装备，我需要知道它算不算远程、算不算重甲吗？** 是，就调 `GetDefaultTroopTraits`。

**第一个函数的推断逻辑是可预测的**（`AgentOriginUtilities.cs:229-268`）。它做三件事。第一，**拉 `troop.FirstBattleEquipment`，为 null 就直接返回四个 false**——所以「没有战斗装备」的单位被推断为「无盾无矛无投掷无重甲」，这大概率不是你想要的，但代码不会告诉你。第二，**只扫前 5 个槽位**：`for (int i = 0; i < 5; i++)` 逐槽读 `firstBattleEquipment[i]`，用 `equipmentElement.Item.PrimaryWeapon.WeaponClass` 分类——`ThrowingAxe` / `ThrowingKnife` / `Javelin` → `hasThrownWeapon`，`SmallShield` / `LargeShield` → `hasShield`，三种 polearm → `hasSpear`。**这个 5 是硬编码的字面量**，而 `Equipment` 实际有更多槽位（`Equipment.cs:285` 的 `GetHumanBodyArmorSum` 遍历的是 `NumAllWeaponSlots` 到 `ArmorItemEndSlot` 的区间）。**放在第 6 槽之后的武器不会被识别**——自定义单位把投掷武器配在非前 5 槽时，推断结果就是错的。第三，**重甲靠一个魔法数字**：`firstBattleEquipment.GetHumanBodyArmorSum() > 24f` 才置 `hasHeavyArmor`。这个 24.0f 是全类型的判定阈值，**没有任何命名常量、没有注释、改起来没有任何提示**。

**第二个函数是纯打包**（`:202-227`），没有推断逻辑，只有映射：`origin.Troop.IsMounted` → `Mount`；`!origin.Troop.IsRanged` → `Melee`，否则 `Ranged`（**注意这两条是互斥的 if-else 表达式的两支**）；然后四个 `origin.HasXxx` 各对应一个掩码位。它有一个容易被忽略的依赖：`GetDefaultTraitsMask` 读的是 `origin.Troop.IsRanged` 与 `origin.Troop.IsMounted`，**也就是角色数据，而不是 origin 自己缓存的四个 bool**。所以对一个自定义 origin 来说，只有 `HasShield` 等四个走 origin 字段，而骑乘与远近仍然来自 `Troop`——**两套数据源混在一个函数里**，改 origin 的字段不会影响 mask 的骑乘/远程位。

由此推出三条实操结论。第一，**它是一层可绕过的缓存**：`BasicBattleAgentOrigin`（`:46`）、`SimpleAgentOrigin`（`:141`）、`PartyAgentOrigin`（`:165`）、`PartyGroupAgentOrigin`（`:105`）都在构造器里调一次 `GetDefaultTroopTraits` 并把结果存进 `_hasXxx` 字段。**如果你已经拿到一个 origin，直接读 `origin.HasShield` 就好，不要再调一遍推断。** 第二，**远程/近战与盾矛之间没有任何因果关系**：一个单位可以同时被判为 `Melee` 且 `hasShield`，这完全正常——它就是步兵持盾。第三，**`GetDefaultTroopTraits` 的四个 out 参数在 `FirstBattleEquipment == null` 时全部保持 false 且函数正常返回**，没有异常、没有警告。调用方拿到的是「假阴性」而不是错误。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetDefaultTroopTraits` | `public static void GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)` | **正向推断**。从 `troop.FirstBattleEquipment` 扫**前 5 个槽位**，按 `PrimaryWeapon.WeaponClass` 判定投掷武器（ThrowingAxe/ThrowingKnife/Javelin）、盾（SmallShield/LargeShield）、矛（OneHanded/TwoHanded/LowGrip polearm）。装备为 null 时四个 out 全部留 false 并正常返回。**四个 origin 实现的构造器都调它**（`BasicBattleAgentOrigin.cs:46` 等）。 |
| `GetDefaultTraitsMask` | `public static TroopTraitsMask GetDefaultTraitsMask(IAgentOriginBase origin)` | **反向打包**。把骑乘（`origin.Troop.IsMounted`）、远程/近战（`origin.Troop.IsRanged`，**二选一**）与 origin 自身的 `HasShield` / `HasSpear` / `HasThrownWeapon` / `HasHeavyArmor` 合成一个位掩码。四个 origin 的 `GetTraitsMask()` 都转发到它（`BasicBattleAgentOrigin.cs:75` 等）。 |
| （阈值常量）`24f` | 字面量，出现在 `:264` | `if (firstBattleEquipment.GetHumanBodyArmorSum() > 24f) hasHeavyArmor = true;` ——**全类型唯一的重甲判定阈值，没有任何命名常量、没有注释**。想改判定标准只能改这一行硬编码。 |
| （槽位上限）`5` | 字面量，出现在 `:240` | `for (int i = 0; i < 5; i++)` ——**只扫前 5 个装备槽**。对比 `Equipment.GetHumanBodyArmorSum`（`Equipment.cs:285`）遍历的是 `NumAllWeaponSlots` 到 `ArmorItemEndSlot` 的**枚举区间**，两者范围并不相同。 |
| （类形态）非 static | `public class AgentOriginUtilities` | **源码写的是 `public class` 而不是 `public static class`**，两个成员也都是 `public static`。所以它**可以被 `new`**，但实例化出来的对象没有任何状态也没有实例方法——纯浪费。 |

## 真实示例

正向推断：给一个刚造好的角色判断它算不算远程兵种、以及有没有重甲（结构照 `BasicBattleAgentOrigin.cs:43-47`）：

<!-- xml-id-unverifiable: v1.4.5 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.5 源码树均无法核对——该版本未随附 XML 语料。
```csharp
BasicCharacterObject troop = MBObjectManager.Instance.GetObject<BasicCharacterObject>("heavy_infantry");
if (troop == null)
{
    Debug.Print("troop not loaded", 0);
    return;
}

AgentOriginUtilities.GetDefaultTroopTraits(
    troop,
    out bool hasThrownWeapon,
    out bool hasSpear,
    out bool hasShield,
    out bool hasHeavyArmor);

Debug.Print("thrown=" + hasThrownWeapon + " spear=" + hasSpear, 0);
Debug.Print("shield=" + hasShield + " heavyArmor=" + hasHeavyArmor, 0);

// Note: a troop with no FirstBattleEquipment returns all-false with no error.
BasicCharacterObject civilian = MBObjectManager.Instance.GetObject<BasicCharacterObject>("artisan");
AgentOriginUtilities.GetDefaultTroopTraits(civilian, out bool t2, out bool s2, out bool sh2, out bool ha2);
Debug.Print("civilian: shield=" + sh2 + " heavyArmor=" + ha2, 0);
```

反向打包：拿到一个 origin 之后直接问它的兵种掩码（结构照 `BasicBattleAgentOrigin.cs:73-76`）：

```csharp
BasicCharacterObject scout = MBObjectManager.Instance.GetObject<BasicCharacterObject>("scout");
BasicBattleAgentOrigin origin = new BasicBattleAgentOrigin(scout);

TroopTraitsMask mask = AgentOriginUtilities.GetDefaultTraitsMask(origin);
Debug.Print("mask = " + mask, 0);

// Melee and Ranged are mutually exclusive: the source is a single ternary
// on origin.Troop.IsRanged, not two independent checks.
bool ranged = mask.HasAnyFlag(TroopTraitsMask.Ranged);
bool mounted = mask.HasAnyFlag(TroopTraitsMask.Mount);
Debug.Print("ranged=" + ranged + " mounted=" + mounted, 0);

// If you already hold an origin, read its cached fields instead of re-inferring.
Debug.Print("cached HasShield = " + origin.HasShield, 0);
Debug.Print("cached HasSpear = " + origin.HasSpear, 0);
```

复刻「扫前 5 槽」的范围限制，这是本页最实用的一段：

```csharp
public static class EquipmentScanner
{
    // Equipment.GetHumanBodyArmorSum (Equipment.cs:285) walks the
    // NumAllWeaponSlots..ArmorItemEndSlot enum range, which is NOT the same as
    // the literal 5 that AgentOriginUtilities uses. This is the whole gap.
    public static bool HasAnyWeaponInFirstFiveSlots(Equipment battleEquipment)
    {
        // 5 is the literal AgentOriginUtilities uses, quoted from its source.
        for (int i = 0; i < 5; i++)
        {
            EquipmentElement element = battleEquipment[i];
            if (!element.IsEmpty)
            {
                return true;
            }
        }
        return false;
    }

    // The threshold behind hasHeavyArmor, quoted verbatim from line 264.
    public const float HeavyArmorThreshold = 24f;
}
```

## 风险与边界

- **只扫前 5 个装备槽。** `:240` 的 `i < 5` 是字面量硬编码，而 `Equipment` 的槽位数由 `EquipmentIndex` 枚举决定。把投掷武器配在第 6 槽之后，`hasThrownWeapon` 会是 `false`，且**没有任何提示**。
- **重甲阈值 24f 是无名字的魔法数字。** `:264` 的 `> 24f` 是全类型唯一的判定标准。要改「多厚的甲算重甲」，只能去改这一行——没有常量、没有注释、没有配置项。
- **`FirstBattleEquipment == null` 时静默全 false。** `:236-239` 直接 return，四个 out 参数保持初始值 false。**这是假阴性，不是错误**，调用方拿到的结果和「这个人确实没装备」完全无法区分。
- **两套数据源混在 `GetDefaultTraitsMask` 里。** 骑乘与远程读 `origin.Troop`，而盾/矛/投掷/重甲读 `origin` 自身的字段。**改 origin 的缓存字段不影响 mask 的骑乘与远程位**，这是最容易踩的不对称。
- **`Melee` 与 `Ranged` 互斥。** `:209` 是一个三元表达式的两支，不是两个独立的 `if`。所以 `Mask.HasAnyFlag(Ranged)` 为真时 `Melee` 必然为假——不要写「远程单位也带一点近战标签」这种假设。
- **它不是 `static class`。** 源码写的是 `public class`，两个成员是 `public static`。`new AgentOriginUtilities()` 能编译，但对象没有任何用途。
- **推断是一次性缓存。** 四个 origin 实现都在构造器里调一次并把结果存进 `_hasXxx`。**拿到 origin 后直接读 `origin.HasShield`，不要重复推断**——尤其是你在运行时改过装备的情况，重新推断会得到与 origin 缓存不一致的结果。
- **它不认识自定义武器类。** `:245-261` 的 `switch` 只列了六个 `WeaponClass`。你给自定义武器注册的 `WeaponClass` 不在其中，就既不是投掷、也不是盾、也不是矛——**「不是任何一种」是静默的**。
- **重甲判定用的是 `GetHumanBodyArmorSum()`，包含属性修正。** 它内部调 `equipmentElement.GetModifiedBodyArmor()`，所以**装备词缀会改变是否越过 24f 阈值**——同一套装备在不同词缀下可能一个算重甲一个不算。

## 跨版本提示

`AgentOriginUtilities.cs` 在 1.4.5 是 72 行、2 个 public static 方法，是原始源码形态。1.3.x / 1.4.6 的对应文件是反编译产物，行数会明显不同。**跨版本真正值得核对的是三个字面量与一个映射表**：前 5 槽的循环上限 `5`、重甲阈值 `24f`、以及 `:209` 的 `IsRanged` 三元映射。任何一个都可能随装备系统重构而变，而**它们全部是硬编码字面量，改动时不会有任何编译错误或弃用警告**——这正是它们危险的地方。另外 `[WeaponClass](../WeaponClass)` 若新增了成员（比如某种新的盾或投掷武器），本类型不会自动识别，必须手工加 `case` 分支。

## 依赖关系

- 契约：[IAgentOriginBase](../IAgentOriginBase) 声明了 `HasShield` / `HasSpear` / `HasThrownWeapon` / `HasHeavyArmor` / `GetTraitsMask()` 五个成员，本类型是它们的标准实现
- 四个调用方：`SimpleAgentOrigin` 与 `PartyAgentOrigin` / `PartyGroupAgentOrigin`（在 `../../campaign/`）、`BasicBattleAgentOrigin`（在 `../../mission-ext/`）——构造器调 `GetDefaultTroopTraits`，`GetTraitsMask()` 调 `GetDefaultTraitsMask`
- 输出类型：[TroopTraitsMask](../TroopTraitsMask) 枚举（`Mount` / `Melee` / `Ranged` / `Shield` / `Spear` / `Thrown` / `Armor`）
- 输入数据：[BasicCharacterObject](../BasicCharacterObject) 的 `FirstBattleEquipment`（实现在 `../../campaign/CharacterObject.cs:152`）
- 武器分类：[WeaponClass](../WeaponClass) 的 6 个分支与 [EquipmentElement](../EquipmentElement) 的 `IsEmpty` / `PrimaryWeapon`
- 护甲计算：[Equipment](../Equipment) 的 `GetHumanBodyArmorSum()`（`Equipment.cs:285`），内部走 `GetModifiedBodyArmor()`
- 桶首页：[core-extra API 分区](../)