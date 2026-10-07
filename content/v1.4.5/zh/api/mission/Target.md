---
title: "Target"
description: "「这个出生 perk 效果作用于玩家还是部队」的枚举：三个成员，但消费方全部绕过枚举名、直接比整数 2/0/1——而 target 属性拼错会静默变成「对两者都生效」。"
---

# Target

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `protected enum Target`（嵌套于 `public abstract class MPOnSpawnPerkEffectBase`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs`

## 概述

`Target` 是 6 行的 `protected` 嵌套枚举，声明在 `MPOnSpawnPerkEffectBase.cs:11-16`，三个成员：`Player` / `Troops` / `Any`。它标注「一个出生（on-spawn）perk 效果限定作用于哪一方」。

它有两个存储/反序列化点：宿主字段 `protected Target EffectTarget`（`:18`），以及 XML 属性 `target` 的解析（`:23-29`）。**它的消费方全在 `Modules.Multiplayer` 侧的四个效果类里**，而且**它们全部把枚举强转成整数再比较**。

## 心智模型

把它当成**「一个被当成整数用的枚举」**。三条推论：

第一,**四个消费点没有一个用枚举名，全部写成 `(int)EffectTarget == 2` / `== 0` / `== 1`。** 我实测的四处：
- `AlternativeEquipmentEffect.cs:56`
- `ArmorEffect.cs:43`
- `DrivenPropertyOnSpawnEffect.cs:47`
- `HitpointsEffect.cs:34`

四处都是同一个形状：`EffectTarget == 2 || (isPlayer ? EffectTarget == 0 : EffectTarget == 1)`。**也就是说 `Player`/`Troops`/`Any` 分别是 0/1/2，而消费方绕过枚举名直接比数字 —— 声明顺序成了硬契约。**

第二,**「作用域」判定与效果是否启用是两次独立判断。** 四处的模式都是 `if (<效果自己的条件> && (<Target 判定>))` —— 例如 `ArmorEffect.cs:43` 前半段是 `(int)drivenProperty == 55 || 56 || 57 || 58`。**所以 `Target` 只决定「对谁」，不决定「开不开」。**

第三,**`target` 属性拼错 ⇒ 静默变成「对两者都生效」。** `:24` 先 `EffectTarget = Target.Any;`，`:25` 再试 `Enum.TryParse<Target>(text, ignoreCase: true, out EffectTarget)`，失败时 `:27` 又设回 `Target.Any` 并在 `:28` 打 `FailedAssert`。**而 `Any` 在消费方里就是「两个条件都成立」—— 所以一个本该只作用于玩家的效果，因为 XML 拼错而对部队也生效了。**

边界：**`protected` 嵌套枚举**。宿主 `MPOnSpawnPerkEffectBase` 是 `public abstract`（`:9`），**所以 mod 可以派生它并在自己的派生类里用 `Target`**，但不能从外部写 `MPOnSpawnPerkEffectBase.Target` 这个类型名。

## 如何使用

**怎么拿到它**：本类无状态，状态在宿主字段 `EffectTarget`（`:18`）上。读取要经派生类。

派生一个出生效果并读 `EffectTarget`——**这是它能到达 mod 代码的唯一路径**：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyOnSpawnEffect : MPOnSpawnPerkEffectBase
{
    protected override void Initialize()
    {
        // EffectTarget 由宿主 Deserialize 从 XML 的 target 属性写入（:23-29）
        // 消费方全都绕枚举名比整数：Player=0, Troops=1, Any=2
        Debug.Print("effectTarget = " + (int)EffectTarget + " (" + EffectTarget + ")", 0);
    }

    public override float GetHitpoints(bool isPlayer)
    {
        // 照抄四个消费点之一的判定形状（HitpointsEffect.cs:34）
        if ((int)EffectTarget == 2 || (isPlayer ? (int)EffectTarget == 0 : (int)EffectTarget == 1))
        {
            return 100f;
        }
        return 0f;
    }
}
```

**用它最容易踩的一条**：**「拼错 `target`」的后果是「作用范围变宽」，不是「效果不生效」。** `:24` 预设 `Any` → `:25` 试解析 → `:27` 回落 `Any` → `:28` 只有 `FailedAssert`（发布版不弹窗）。**而 `Any` 在消费方里恰好等价于「玩家和部队都算」** —— 配置错误被静默地升级成了更宽松的规则。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Player` | `Player`（枚举成员，序号 0，`MPOnSpawnPerkEffectBase.cs:13`） | 只作用于玩家方。**消费方以整数 0 引用它** —— `isPlayer ? EffectTarget == 0 : …`（`HitpointsEffect.cs:34` 等四处同形）。 |
| `Troops` | `Troops`（枚举成员，序号 1，`:14`） | 只作用于部队方。**消费方以整数 1 引用它** —— `isPlayer ? … : EffectTarget == 1`。 |
| `Any` | `Any`（枚举成员，序号 2，`:15`） | 两者都作用。**消费方以整数 2 引用它** —— `EffectTarget == 2` 短路整个三元。**注意它是 `:24` 的解析失败回落值。** |

## 真实示例

四个消费点的判定形状逐字相同（这是本类唯一的「行为」）：

```csharp
// AlternativeEquipmentEffect.cs:56
// ArmorEffect.cs:43
// DrivenPropertyOnSpawnEffect.cs:47
// HitpointsEffect.cs:34
// 全部是：
//   if (<效果自己的条件> && ((int)EffectTarget == 2 || (isPlayer ? (int)EffectTarget == 0 : (int)EffectTarget == 1)))
// 其中 ArmorEffect.cs:43 的前半段是 (int)drivenProperty == 55 || 56 || 57 || 58
// => Player=0 / Troops=1 / Any=2 是被消费方写死的整数契约
Debug.Print("四处消费点全部比整数 0/1/2，无一处用枚举名", 0);
```

反序列化的三步（与 [HitType](../HitType/) 完全同构）：

```csharp
// :23  string text = node?.Attributes?["target"]?.Value;
// :24  EffectTarget = Target.Any;                              ← 先预设
// :25  if (text != null && !Enum.TryParse<Target>(text, ignoreCase: true, out EffectTarget))
// :27      EffectTarget = Target.Any;                          ← 失败回落 Any
// :28      Debug.FailedAssert("provided 'target' is invalid", …);
// 与 HitType 的 :29/:30/:32/:33 是同一个模板（只有 XML 属性名与消息不同）
Debug.Print("解析失败回落 Any = 变宽而不是消失", 0);
```

宿主的四个虚方法（`Target` 决定这些方法的结果对谁生效）：

```csharp
// :32  GetTroopCountMultiplier()                          -> float, 默认 0f
// :37  GetExtraTroopCount()                               -> int,   默认 0
// :42  GetAlternativeEquipments(bool isPlayer, …, bool getAll = false)
// :47  GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty, float baseValue)
// :52  GetHitpoints(bool isPlayer)                        -> float, 默认 0f
// 四个都带 isPlayer 形参，而 EffectTarget 决定它对哪一方生效 —— 两者是独立的正交维度
Debug.Print("isPlayer 形参与 EffectTarget 正交", 0);
```

## 风险与边界

- **`protected` 嵌套枚举，编译期只有派生类可见。** 宿主 `MPOnSpawnPerkEffectBase` 是 `public abstract`，mod **可以**派生并使用；但不能从外部写 `MPOnSpawnPerkEffectBase.Target`。
- **枚举序号是硬契约。** 四处消费点全部写死 0/1/2。**在 `Target` 里插入或重排成员会静默改变所有效果的生效对象。**
- **消费方全部绕过枚举名用整数。** 这意味着 `grep "Target.Player"` 找不到任何消费点 —— **排查时要去效果类里找 `(int)EffectTarget`。**
- **`target` 拼错 ⇒ 作用域变宽。** `:24`/`:25`/`:27` + `:28` 的断言（发布版不弹窗）。见「如何使用」。
- **`target` 属性缺失时连断言都不打。** `:25` 的条件是 `text != null && !TryParse(...)` —— `text == null` 时整个 if 不进，`:24` 预设的 `Any` 就是最终值。
- **作用域与启用是两回事。** 四处都是「效果条件 && 作用域条件」的合取，`Target` 不控制效果开不开启。
- **枚举不存档。** 它来自 XML 的 `Enum.TryParse`，不是 `SaveableField` —— **改 XML 会改变同一存档里所有出生效果的行为。**
- **同构的姊妹类型：** [HitType](../HitType/) 在 `MPCombatPerkEffect` 里是几乎逐字相同的模板（`:29`/`:30`/`:32`/`:33`，XML 属性名 `hit_type`，消息 `"provided 'hit_type' is invalid"`）。**两处都是「解析失败静默放宽」。**

## 参见

- 宿主：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs:9`（`public abstract class MPOnSpawnPerkEffectBase : MPPerkEffectBase, IOnSpawnPerkEffect`）；字段 `:18`、反序列化 `:23-29`、四个虚方法 `:32`/`:37`/`:42`/`:47`/`:52`
- 四个消费点：`bannerlord-1.4.5/Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/AlternativeEquipmentEffect.cs:56`、`ArmorEffect.cs:43`、`DrivenPropertyOnSpawnEffect.cs:47`、`HitpointsEffect.cs:34`
- 基类与接口：[MPPerkEffectBase](../../mission-ext/MPPerkEffectBase/)、[IOnSpawnPerkEffect](../../mission-ext/IOnSpawnPerkEffect/)、`DrivenProperty`、`EquipmentIndex`
- 同构对照：[HitType](../HitType/)（另一个「解析失败静默放宽」的枚举）
- 同桶：[AgentHelper](../AgentHelper/)、[ItemType](../ItemType/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)、[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)
- 桶首页：[mission API 分区](../)