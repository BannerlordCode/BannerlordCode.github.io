---
title: "HitType"
description: "多人对战「这个 perk 效果只在哪种命中上生效」的枚举：三个成员，唯一消费点是 MPCombatPerkEffect 里的一个 switch，而 Melee/Ranged 由 WeaponComponentData 是否为远程武器决定。"
---

# HitType

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`（Modules.CustomBattle / TaleWorlds.MountAndBlade.Multiplayer）
**Type:** `protected enum HitType`（嵌套于 `public abstract class MPCombatPerkEffect`）
**Base:** 无
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MPCombatPerkEffect.cs`

## 概述

`HitType` 是 6 行的 `protected` 嵌套枚举，声明在 `MPCombatPerkEffect.cs:10-15`，三个成员：`Any` / `Melee` / `Ranged`。它标注的是「一个战斗 perk 效果限定在哪种命中上触发」。

它有两个存储点：宿主类的 `protected HitType EffectHitType`（`:17`），以及 XML 属性 `hit_type` 的反序列化（`:28-34`）。**唯一消费点是 `MPCombatPerkEffect.cs:74-82` 的一个 `switch (EffectHitType)`**，它与另外两个条件（`DamageType` 与 `WeaponClass` 的可空判定，`:72`）一起决定效果是否命中。

## 心智模型

把它当成**「一个三值的过滤条件」**。三条推论：

第一,**`Any` 是显式成员而不是「null 即不过滤」。** `:76-77` 的 `case HitType.Any: return true;` 直接返回——**它与 `:72` 那两个条件是「与」关系**，所以 `hit_type="any"` 并不绕过伤害类型/武器类别的检查，只是不额外收窄命中方式。

第二,**`Melee` 与 `Ranged` 的判定依据是武器而不是伤害类型。** `:78-79` 是 `!IsWeaponRanged(attackerWeapon)`、`:80-81` 是 `IsWeaponRanged(attackerWeapon)`，两者互为取反。**`IsWeaponRanged`（`:87`）接受 `WeaponComponentData`，为 null 时（`:89` 有判空）走 else 分支** —— 我确认了它判空，但**没有读它的 else 分支返回什么**，见风险节。

第三,**反序列化失败会静默回落成 `Any`。** `:29` 先无条件 `EffectHitType = HitType.Any;`，`:30` 再试 `Enum.TryParse<HitType>(text, ignoreCase: true, out EffectHitType)`，失败时 `:32` 又把它设回 `HitType.Any` 并在 `:33` 打一条 `FailedAssert`。**所以写错 `hit_type` 的效果不是「不生效」，而是「对所有命中都生效」—— 这比不生效危险得多。**

边界：**`protected` 嵌套枚举**，编译期只能在 `MPCombatPerkEffect` 的派生类里引用。**而 `MPCombatPerkEffect` 是 `public abstract`，所以 mod 可以派生它并在自己的派生类里写 `HitType.Melee`。**

## 如何使用

**怎么拿到它**：本类没有存储自己的实例；存储在宿主字段 `EffectHitType`（`:17`）上，通过 `MPCombatPerkEffect` 的派生类读取。

派生一个 perk 效果并使用这个枚举——**这是它唯一能到达 mod 代码的路径**：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyCrushPerkEffect : MPCombatPerkEffect
{
    protected override void Initialize()
    {
        // EffectHitType 由宿主 Deserialize 从 XML 的 hit_type 属性写入（:28-34）
        // 想在代码里固定它，可以在 Deserialize 之后覆写
        Debug.Print("hit type = " + EffectHitType, 0);
    }

    protected override void OnHit(ref DamageResult result, float damage, int attacker, bool isCounterAttack, int target, int baseDamage)
    {
        // switch 的语义照抄宿主 :74-82
        switch (EffectHitType)
        {
            case HitType.Any:
                Debug.Print("对所有命中生效", 0);
                break;
            case HitType.Melee:
                Debug.Print("仅近战", 0);
                break;
            case HitType.Ranged:
                Debug.Print("仅远程", 0);
                break;
        }
    }
}
```

**用它最容易踩的一条**：**`hit_type` 拼错不会让效果失效，而是让它对所有命中生效。** `:29` 预设 `Any`、`:30` 试解析、`:32` 解析失败回落 `Any` —— **而 `:33` 的 `Debug.FailedAssert` 在发布版不弹窗。** 所以一个本该「只对远程生效」的近战 perk，因为 XML 里写成了 `hit_type="rangeds"` 而变成了全命中。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Any` | `Any`（枚举成员，序号 0，`MPCombatPerkEffect.cs:12`） | **不限命中方式。** `:76-77` 直接 `return true`。**注意它不绕过 `:72` 的 `DamageType`/`WeaponClass` 判定** —— 三者是「与」关系。 |
| `Melee` | `Melee`（枚举成员，序号 1，`:13`） | 仅近战。`:78-79` 的 `!IsWeaponRanged(attackerWeapon)`。**判定依据是武器类型，不是伤害类型。** |
| `Ranged` | `Ranged`（枚举成员，序号 2，`:14`） | 仅远程。`:80-81` 的 `IsWeaponRanged(attackerWeapon)`，与 `Melee` 互为取反。 |

## 真实示例

三个成员与两个宿主字段的关系（存储与取值）：

```csharp
// 存储：MPCombatPerkEffect.cs:17   protected HitType EffectHitType;
// 反序列化：:28  string text = node?.Attributes?["hit_type"]?.Value;
//          :29  EffectHitType = HitType.Any;                                ← 先预设
//          :30  if (text != null && !Enum.TryParse<HitType>(text, ignoreCase: true, out EffectHitType))
//          :33      Debug.FailedAssert("provided 'hit_type' is invalid", …);
//          :32      EffectHitType = HitType.Any;                            ← 失败回落
// 消费：:74-82  switch (EffectHitType)
// 与其他条件的合取：:72  (!DamageType.HasValue || …) && (!WeaponClass.HasValue || …)
Debug.Print("Any 也走 :72 的合取；解析失败静默回落 Any", 0);
```

`ignoreCase` 只对 `hit_type` 的文本生效（`:30` 的 `ignoreCase: true`）——而 `DamageType` 与 `WeaponClass` 的解析在同一方法的后面：

```csharp
// :35  string text2 = node?.Attributes?["damage_type"]?.Value;
// :37  if (text2 == null || text2.ToLower() == "any")  DamageType = null;   ← "any" 走 ToLower 比较
//      ↑ 注意这一处用的是字符串比较而不是 Enum.TryParse，与 :30 的写法不同
Debug.Print("damage_type 的 any 用 ToLower 字符串比较；hit_type 用 Enum.TryParse(ignoreCase)", 0);
```

## 风险与边界

- **`protected` 嵌套枚举，编译期只有派生类可见。** 宿主 `MPCombatPerkEffect` 是 `public abstract`，所以 mod **可以**派生它并用这个枚举；**但不能从外部直接引用 `MPCombatPerkEffect.HitType` 这个类型名**（嵌套 protected）。
- **拼错 `hit_type` ⇒ 静默变成全命中。** `:29` 预设、`:30` 试解析、`:32` 回落、`:33` 只 `FailedAssert`。**发布版断言不弹窗。** 这是本类最危险的一条。
- **`hit_type` 属性缺失时的行为不同。** `:30` 的条件是 `text != null && !TryParse(...)` —— **`text == null` 时整个 if 都不进，`:29` 预设的 `Any` 就是最终值**，且**连 `:33` 的断言都不打**（属性缺失被当作合法）。
- **`Any` 不是「不过滤」。** `:72` 的 `DamageType` / `WeaponClass` 合取始终生效。
- **`Melee`/`Ranged` 互为取反，但基于武器而非伤害。** `:78-81`。所以「徒手」也算 `Melee`，而「远程武器打近战」这类情况按武器类型走。
- **`IsWeaponRanged(null)` 的返回我没读。** `:87-89` 只确认了它判 `attackerWeapon != null`，**else 分支返回什么我没有读到，故不写**。
- **枚举序号 0/1/2，但没有任何持久化。** 它来自 XML 的 `Enum.TryParse`，**不是 `SaveableField`**，所以存档里不存这个枚举值本身 —— 但 XML 改动会让同一存档的行为改变。
- **`Modules.CustomBattle` 与 `TaleWorlds.MountAndBlade.Multiplayer` 两个程序集里都有 `HitType` 声明？** 我确认 `MPCombatPerkEffect.cs:10` 与 `Modules.Multiplayer/.../MPCombatPerkEffect.cs:10` 两处**都有**同名嵌套枚举（结构逐字相同）。**它们是两个不同的类型，不可互换。**

## 参见

- 宿主类：`bannerlord-1.4.5/Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MPCombatPerkEffect.cs:8`（`public abstract class MPCombatPerkEffect : MPPerkEffect`）；孪生文件 `.../Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/.../MPCombatPerkEffect.cs:10`
- 消费点：同文件 `:72`（合取判定）与 `:74-82`（switch）
- 辅助判定：同文件 `:87` `IsWeaponRanged(WeaponComponentData)`；载荷 `WeaponComponentData.WeaponClass`
- 相关可空字段：同文件 `:19` `DamageTypes? DamageType`、`:21` `WeaponClass? WeaponClass`、`:27` 的 `IsDisabledInWarmup`
- 同桶：[ItemType](../ItemType/)（同为 `internal` 枚举，同样靠 XML 字符串解析）、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 桶首页：[mission API 分区](../)