---
title: "MPCombatPerkEffect"
description: "联机 perk 的命中判定基类：从 XML 属性读出「近战/远程、伤害类型、武器类别」三个可选条件，IsSatisfied 用它判断一次攻击该不该吃这个效果。三个条件都是 null = 全放行。"
---

# MPCombatPerkEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPCombatPerkEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MPCombatPerkEffect.cs`

## 概述

全文 99 行，是联机对战所有「战斗 perk 效果」的共同基类。它本身**不产生任何效果**，只做两件事：

**一、从 XML 读条件。** `Deserialize` 覆写在 `MPCombatPerkEffect.cs:23`，从 XML 属性里读 `is_disabled_in_warmup`、`hit_type`、`damage_type`、`weapon_class` 四个键，解析成三个可选的判定条件。

**二、判一次攻击是否命中条件。** `IsSatisfied` 在 `MPCombatPerkEffect.cs:65`，签名是 `(WeaponComponentData attackerWeapon, DamageTypes damageType)`，返回一个 `bool`。

**三个条件字段全是可空值类型**：`EffectHitType`（`MPCombatPerkEffect.cs:17`）是非空的枚举默认值 `Any`，而 `DamageType`（`MPCombatPerkEffect.cs:19`）与 `WeaponClass`（`MPCombatPerkEffect.cs:21`）都是 `Nullable`。

## 心智模型

把它当成**「效果生效前的三重门卫」**，而不是「效果本身」。四条推论：

第一，**三个条件的默认语义全是「不设限」。** `EffectHitType` 默认 `HitType.Any`（`MPCombatPerkEffect.cs:12`），而 `Any` 在 `IsSatisfied` 里直接 `return true`（`MPCombatPerkEffect.cs:77`）。`DamageType` 与 `WeaponClass` 的 null 在 `MPCombatPerkEffect.cs:72` 的判断里被当作「通过」。**所以一个不写任何条件的 perk，对所有攻击生效。** 反过来，想让效果严格受限，**三个条件都得在 XML 里显式写出来**。

第二，**XML 里写 `"any"` 和不写是同义的，但走的分支不同。** `damage_type` 为 null 或字面量 `"any"` 都落到 `DamageType = null`（`MPCombatPerkEffect.cs:37-40`）。`hit_type` 则是先置 `Any`（`MPCombatPerkEffect.cs:29`）再尝试解析（`MPCombatPerkEffect.cs:30`）。**写法可以随意，但要知道 null 版本是靠字符串比较绕过去的。**

第三，**解析失败只打断言，不抛异常，而且仍然落到「不设限」。** `Debug.FailedAssert` 在 `MPCombatPerkEffect.cs:33`、`:47`、`:61` 三处。注意 `hit_type` 那一支先置 `Any`（`:29`）再解析，失败后又置回 `Any`（`:32`）；`damage_type` 和 `weapon_class` 失败后置 null。**你的 XML 写错一个值，效果不会消失，而是变成对所有攻击生效。** 这是最容易出事的方向 —— 一个本该只对远程生效的效果，因为 `hit_type` 拼错，变成了对近战也生效。

第四，**「远程」的判定把消耗品也算成远程。** `IsWeaponRanged` 在 `MPCombatPerkEffect.cs:87`：`attackerWeapon != null` 时，如果 `IsConsumable` 为真就**直接返回 true**（`MPCombatPerkEffect.cs:95`），否则才返回 `IsRangedWeapon`（`MPCombatPerkEffect.cs:93`）。而武器为 null 时返回 false（`MPCompoundPerkEffect.cs:97` 那行的等价逻辑在 `:97`）。**所以投石索、箭矢这类「弹药类」武器，在 melee/ranged 判定里算远程——尽管 `WeaponClass.Sling` 在散布计算里另有分支。**

## 如何使用

**拿法：** 继承它，实现效果本身。它没有实例入口，所有成员都是 `protected`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModCriticalPerk : MPCombatPerkEffect
{
    public override void ApplyEffect(Mission mission, Agent affectedAgent)
    {
        // IsSatisfied 声明在 MPCombatPerkEffect.cs:65，
        // 传 null 武器表示「没有武器」（例如毒伤）
        if (!IsSatisfied(null, DamageTypes.Blunt))
        {
            return;
        }

        affectedAgent.HitPoints -= 10f;
    }
}
```

从 XML 读条件（照抄基类的三段式解析）：

```csharp
using System;
using System.Xml;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyModConditionedPerk : MPCombatPerkEffect
{
    protected override void Deserialize(XmlNode node)
    {
        // 基类实现在 MPCombatPerkEffect.cs:23-63
        base.Deserialize(node);

        // 此时 EffectHitType / DamageType / WeaponClass 已被填好。
        // ⚠ 解析失败时它们会落到「不设限」而不是报错中止，
        //    所以这里要自己再兜一层：
        string hit = node?.Attributes?["hit_type"]?.Value;
        if (hit != null && !Enum.IsDefined(typeof(HitType), EffectHitType))
        {
            Debug.Print("[MyMod] hit_type 未定义，效果已放宽到全部攻击: " + hit, 0);
        }
    }
}
```

预判一个 XML 会不会把效果放宽（这是本类最容易踩的坑）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static bool EffectIsUnconditional(string hitType, string damageType, string weaponClass)
{
    // hit_type 不写或写 any => HitType.Any => MPCombatPerkEffect.cs:77 直接 true
    if (string.IsNullOrEmpty(hitType)
        || string.Equals(hitType, "any", StringComparison.OrdinalIgnoreCase))
    {
        return true;
    }

    // damage_type 与 weapon_class 为 null 时，MPCombatPerkEffect.cs:72 的条件恒成立
    if (string.IsNullOrEmpty(damageType) || string.Equals(damageType, "any", StringComparison.OrdinalIgnoreCase))
    {
        return true;
    }

    if (string.IsNullOrEmpty(weaponClass) || string.Equals(weaponClass, "any", StringComparison.OrdinalIgnoreCase))
    {
        return true;
    }

    return false;   // 三道门都设了，才是真的受限
}
```

判断一个具体攻击会不会命中：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static bool WillAffect(MyModConditionedPerk perk,
                              WeaponComponentData attackerWeapon,
                              DamageTypes damageType)
{
    // IsSatisfied 是 protected —— 外部要通过你自己的公开包装调用。
    // 实际逻辑见 MPCombatPerkEffect.cs:72 到 :85：
    //   1. DamageType 为 null 或相等          —— 伤害类型门
    //   2. WeaponClass 为 null 或相等          —— 武器类别门
    //   3. 按 EffectHitType 三分支             —— 近战/远程门
    //   武器为 null 时，IsWeaponRanged 返回 false（MPCombatPerkEffect.cs:97），
    //   所以「无武器」永远不算远程。
    return perk.IsSatisfiedPublic(attackerWeapon, damageType);
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public abstract class MPCombatPerkEffect : MPPerkEffect`（`MPCombatPerkEffect.cs:8`） | 抽象类。文件头 `using System.Xml`（`MPCombatPerkEffect.cs:2`）说明它的主业是解析 XML。 |
| `HitType` | `protected enum HitType { Any, Melee, Ranged }`（`MPCombatPerkEffect.cs:10`） | **protected 嵌套枚举**，三个成员在 `MPCombatPerkEffect.cs:12` 到 `:14`。`Any` 是「不设限」，不是「任意命中都要特殊处理」。 |
| `EffectHitType` | `protected HitType EffectHitType`（`MPCombatPerkEffect.cs:17`） | **非可空**，初值为 `Any`（`MPCombatPerkEffect.cs:29` 显式赋）。是三个条件里唯一不可能为 null 的。 |
| `DamageType` | `protected DamageTypes? DamageType`（`MPCombatPerkEffect.cs:19`） | **可空**。null = 不限伤害类型。在 `MPCombatPerkEffect.cs:37` 与 `:40` 两条路径上被置 null。 |
| `WeaponClass` | `protected WeaponClass? WeaponClass`（`MPCombatPerkEffect.cs:21`） | **可空**。null = 不限武器类别。`"any"` 字面量在 `MPCombatPerkEffect.cs:51` 被当成 null。 |
| `Deserialize` | `protected override void Deserialize(XmlNode node)`（`MPCombatPerkEffect.cs:23`） | **本类的主方法。** 读 `is_disabled_in_warmup`（`MPCombatPerkEffect.cs:27`）、`hit_type`（`:28`）、`damage_type`（`:35`）、`weapon_class`（`:50`）四个属性。三处 `Debug.FailedAssert` 在 `:33`、`:47`、`:61`。**全形参用 `node?.`，所以 null 节点安全。** |
| `IsSatisfied` | `protected bool IsSatisfied(WeaponComponentData attackerWeapon, DamageTypes damageType)`（`MPCombatPerkEffect.cs:65`） | **三重门的与逻辑**在 `MPCombatPerkEffect.cs:72`，三个 switch 分支在 `MPCombatPerkEffect.cs:76`、`:78`、`:80`。**返回 false 的唯一出口是 `MPCombatPerkEffect.cs:84`。** |
| `IsWeaponRanged` | `protected bool IsWeaponRanged(WeaponComponentData attackerWeapon)`（`MPCombatPerkEffect.cs:87`） | 消耗品一律算远程（`MPCombatPerkEffect.cs:95`），否则看 `IsRangedWeapon`（`:93`），武器为 null 返回 false（`:97`）。**「无武器」永远落在非远程侧。** |

## 真实示例

看清三个条件如何组合成与逻辑（展开 `MPCombatPerkEffect.cs:72`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static bool SatisfiedCheck(bool? effectHitType,
                                  DamageTypes? requiredDamageType,
                                  WeaponClass? requiredWeaponClass,
                                  WeaponComponentData attackerWeapon,
                                  DamageTypes actualDamageType)
{
    // 第一道门：DamageType（对应 MPCombatPerkEffect.cs:72 的前半段）
    if (requiredDamageType.HasValue && requiredDamageType.Value != actualDamageType)
    {
        return false;
    }

    // 第二道门：WeaponClass（同句的后半段）
    // 注意：武器为 null 时 requiredWeaponClass 必须也为 null，否则不相等
    bool weaponMatches = !requiredWeaponClass.HasValue
        || (attackerWeapon != null && requiredWeaponClass.Value == attackerWeapon.WeaponClass);

    if (!weaponMatches)
    {
        return false;
    }

    // 第三道门：近战 / 远程（对应 MPCombatPerkEffect.cs:74-82 的 switch）
    bool weaponIsRanged;
    if (attackerWeapon == null)
    {
        weaponIsRanged = false;                       // MPCombatPerkEffect.cs:97
    }
    else if (attackerWeapon.IsConsumable)
    {
        weaponIsRanged = true;                        // MPCombatPerkEffect.cs:95
    }
    else
    {
        weaponIsRanged = attackerWeapon.IsRangedWeapon;  // MPCombatPerkEffect.cs:93
    }

    switch (effectHitType)
    {
        case HitType.Any:    return true;             // MPCombatPerkEffect.cs:77
        case HitType.Melee:  return !weaponIsRanged;  // MPCombatPerkEffect.cs:79
        case HitType.Ranged: return weaponIsRanged;   // MPCombatPerkEffect.cs:81
        default:             return false;            // MPCombatPerkEffect.cs:84
    }
}
```

把三个 XML 属性的解析行为固化成你自己的预检（对应 `MPCombatPerkEffect.cs:23-63`）：

```csharp
using System;
using System.Xml;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyModStrictPerkEffect : MPCombatPerkEffect
{
    protected override void Deserialize(XmlNode node)
    {
        base.Deserialize(node);   // 基类在 MPCombatPerkEffect.cs:23

        // 基类解析失败时只打 FailedAssert（MPCombatPerkEffect.cs:33 / :47 / :61），
        // 然后把条件放宽成「不设限」。这里补上真正的拦截。
        string hit = node?.Attributes?["hit_type"]?.Value;
        if (hit != null && !Enum.TryParse(hit, ignoreCase: true, out HitType parsed)
                          && !hit.Equals("any", StringComparison.OrdinalIgnoreCase))
        {
            throw new FormatException(
                "hit_type 无法解析，基类已把它放宽为 Any（对全部攻击生效）: " + hit);
        }
    }

    public override void ApplyEffect(Mission mission, Agent affectedAgent)
    {
        // IsSatisfied 的武器形参是 WeaponComponentData。
        // ⚠ 拿不到就传 null —— 而 null 在 MPCombatPerkEffect.cs:97 被算作「非远程」，
        //    所以你的 HitType.Ranged 条件会把这次调用判成不满足。
        WeaponComponentData weapon = null;

        if (!IsSatisfied(weapon, DamageTypes.Cut))
        {
            return;
        }
        // ...
    }
}
```

区分「真的不限」与「解析失败被放宽成不限」：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// HitType 是 protected 嵌套枚举，外部拿不到 —— 用一个等价的本地副本来诊断
public enum AnyHitType { Any, Melee, Ranged }

public static class MyModPerkDiagnostics
{
    public static string DiagnoseHitType(string hit)
    {
        if (hit == null)
        {
            return "OK: 未写 hit_type => Any（刻意的不限）";
        }

        if (hit.Equals("any", System.StringComparison.OrdinalIgnoreCase))
        {
            return "OK: 显式写 any => Any（刻意的不限）";
        }

        if (!System.Enum.TryParse(hit, ignoreCase: true, out AnyHitType _))
        {
            // 走到这里说明基类会在 MPCombatPerkEffect.cs:32 把条件置回 Any，
            // 并且只在 MPCombatPerkEffect.cs:33 打一条 FailedAssert —— 效果被静默放宽了
            return "DANGER: 解析失败后被置回 Any，效果已从「受限」变成「全部攻击」: " + hit;
        }

        return "OK: 正常解析为 " + hit;
    }
}
```

## 风险与边界

- **三个条件默认全不限。** `Any` 在 `MPCombatPerkEffect.cs:77` 直接返回 true；两个可空字段在 `MPCombatPerkEffect.cs:72` 被当作通过。**不写 XML = 效果对所有攻击生效。**
- **解析失败会静默放宽，不是中止。** `MPCombatPerkEffect.cs:33`、`:47`、`:61` 只打 `Debug.FailedAssert`。**`Debug.FailedAssert`（`Debug.cs:117`）本身不是空实现——它有判空与转发（`Debug.cs:121`）；真正空的是第二跳 `MBDebugManager.cs:33`**（见 [MBDebugManager](../MBDebugManager/) 页），所以你连日志都可能看不到。**`hit_type` 拼错 → 近战限制失效 → 近战也能吃到远程效果。**
- **`"any"` 走字符串比较而不是枚举解析**（`MPCombatPerkEffect.cs:37`、`:51`）。大小写敏感（用的是 `ToLower()` 比较）。
- **消耗品一律算远程**（`MPCombatPerkEffect.cs:95`）。箭矢、投石索弹药在 melee/ranged 判定里与真远程武器同侧。
- **武器为 null 一律算非远程**（`MPCombatPerkEffect.cs:97`）。**毒伤、坠落这类无武器伤害永远落在 `HitType.Melee` 侧** —— 命名是 Melee 但语义是「非远程」。
- **`WeaponClass` 门与武器 null 交互微妙。** `MPCombatPerkEffect.cs:72` 里的比较是 `(WeaponClass?)WeaponClass.Value == (attackerWeapon != null ? new WeaponClass?(attackerWeapon.WeaponClass) : null)`。**武器为 null 且条件非 null 时不相等，直接拒绝。**
- **`Deserialize` 是 protected override。** 你覆写时**必须先调 `base.Deserialize(node)`**，否则三个条件全留在默认值（= 全不限）。
- **`is_disabled_in_warmup` 在基类里被读**（`MPCombatPerkEffect.cs:27`）但赋值给的是基类的字段（声明在 `MPPerkEffectBase`），本类不参与判定。消费方是 [MPConditionalEffect](../MPConditionalEffect/)（见 `MPConditionalEffect.cs:355`）。
- **全形参 null-safe。** `node?.Attributes?["x"]?.Value` 链式空值传播，**传 null XmlNode 不会抛异常** —— 所有条件都留默认值。
- **CustomBattle 与 Multiplayer 各有一份同名文件。** 本类在 `Modules.CustomBattle/...` 下，联机正式模块里还有一份相同实现。**改一份不影响另一份。**

## 依赖关系

- 本类：`MPCombatPerkEffect.cs:8` 类头、`:10` 嵌套枚举、`:17` 到 `:21` 三个条件字段、`:23` XML 解析、`:65` 命中判定、`:87` 远程判定（这一句指的都是同一个文件）
- 基类链：[MPPerkEffect](../MPPerkEffect/) → [MPPerkEffectBase](../MPPerkEffectBase/)（`Deserialize` 的抽象声明在 `MPPerkEffectBase.cs:147`；`is_disabled_in_warmup` 写在这一层）
- 条件类型：[DamageTypes](../../core-extra/DamageTypes/)、[WeaponClass](../../core-extra/WeaponClass/)、[WeaponComponentData](../../core-extra/WeaponComponentData/)
- 断言落地：[Debug](../../core-extra/Debug/) 的 `FailedAssert`（`Debug.cs:117`，**有判空与转发**），它转发的目标 `MBDebugManager.cs:33` 才是空体（见 [MBDebugManager](../MBDebugManager/)）
- 同构副本：`Modules.Multiplayer/` 下有同名同实现的文件，两份互不影响
- 桶首页：[mission-ext API 分区](../)