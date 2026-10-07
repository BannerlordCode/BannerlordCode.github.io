# 试点证据：DefaultAgeModel

> 采集时间：2026-08-14
> 源码树（只读）：`C:\WorkSpace\Bannerlord\bannerlord-1.3.0`
> 目标页：`content/v1.3.0/zh/api/campaign/DefaultAgeModel.md`

---

## 1) 源文件路径 + 类声明行号

**grep 命令：**

```bash
cd /c/WorkSpace/Bannerlord && grep -rn "class DefaultAgeModel" bannerlord-1.3.0/ 2>/dev/null
```

**grep 输出：**

```
bannerlord-1.3.0/TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs:7:	public class DefaultAgeModel : AgeModel
```

**源文件完整路径：**

```
C:\WorkSpace\Bannerlord\bannerlord-1.3.0\TaleWorlds.CampaignSystem\GameComponents\DefaultAgeModel.cs
```

- 文件总行数：285 行（`wc -l` 输出 `285`）
- 类声明行：第 **7** 行
- 命名空间：`TaleWorlds.CampaignSystem.GameComponents`
- 基类：`AgeModel`（抽象类，声明于 `bannerlord-1.3.0/TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs:7`，`public abstract class AgeModel : MBGameModel<AgeModel>`）

---

## 2) 逐成员清单

源文件共 **21 个 public 成员**（7 个 override 属性 + 1 个 override 方法 + 13 个 public const 字段）。无显式构造函数声明（使用隐式默认构造函数）。

> **口径**：7 override 属性 + 1 override 方法 + 13 const = 21 个 public 成员。
>
> **取数命令：**
> ```bash
> cd /c/WorkSpace/Bannerlord && grep -c 'const ' bannerlord-1.3.0/TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs
> ```
> **输出：**
> ```
> 13
> ```

### 2.1 属性（7 个 override int 属性）

| # | 签名 | 源文件:行号 | 一句话它做什么 |
|---|------|-----------|---------------|
| 1 | `public override int BecomeInfantAge { get; }` | `DefaultAgeModel.cs:11` | 返回"成为婴儿"的年龄阈值，固定返回 `3` |
| 2 | `public override int BecomeChildAge { get; }` | `DefaultAgeModel.cs:21` | 返回"成为儿童"的年龄阈值，固定返回 `6` |
| 3 | `public override int BecomeTeenagerAge { get; }` | `DefaultAgeModel.cs:31` | 返回"成为青少年"的年龄阈值，固定返回 `14` |
| 4 | `public override int HeroComesOfAge { get; }` | `DefaultAgeModel.cs:41` | 返回"英雄成年"的年龄阈值，固定返回 `18` |
| 5 | `public override int MiddleAdultHoodAge { get; }` | `DefaultAgeModel.cs:51` | 返回"中年"的年龄阈值，固定返回 `35` |
| 6 | `public override int BecomeOldAge { get; }` | `DefaultAgeModel.cs:61` | 返回"成为老人"的年龄阈值，固定返回 `55` |
| 7 | `public override int MaxAge { get; }` | `DefaultAgeModel.cs:71` | 返回角色最大年龄上限，固定返回 `128` |

### 2.2 方法（1 个 override 方法）

| # | 签名 | 源文件:行号 | 一句话它做什么 |
|---|------|-----------|---------------|
| 8 | `public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | `DefaultAgeModel.cs:80` | 根据角色的职业（Occupation）和附加标签（additionalTags）计算该角色在特定地点的年龄上下限，通过 out 参数返回 |

### 2.3 常量字段（13 个 public const string）

| # | 签名 | 源文件:行号 | 一句话它做什么 |
|---|------|-----------|---------------|
| 9 | `public const string TavernVisitorTag = "TavernVisitor"` | `DefaultAgeModel.cs:247` | 酒馆访客标签常量 |
| 10 | `public const string TavernDrinkerTag = "TavernDrinker"` | `DefaultAgeModel.cs:250` | 酒馆酒客标签常量 |
| 11 | `public const string SlowTownsmanTag = "SlowTownsman"` | `DefaultAgeModel.cs:253` | 慢行镇民标签常量 |
| 12 | `public const string TownsfolkCarryingStuffTag = "TownsfolkCarryingStuff"` | `DefaultAgeModel.cs:256` | 搬运物品的镇民标签常量 |
| 13 | `public const string BroomsWomanTag = "BroomsWoman"` | `DefaultAgeModel.cs:259` | 扫帚女标签常量 |
| 14 | `public const string DancerTag = "Dancer"` | `DefaultAgeModel.cs:262` | 舞者标签常量 |
| 15 | `public const string BeggarTag = "Beggar"` | `DefaultAgeModel.cs:265` | 乞丐标签常量 |
| 16 | `public const string ChildTag = "Child"` | `DefaultAgeModel.cs:268` | 儿童标签常量 |
| 17 | `public const string TeenagerTag = "Teenager"` | `DefaultAgeModel.cs:271` | 青少年标签常量 |
| 18 | `public const string InfantTag = "Infant"` | `DefaultAgeModel.cs:274` | 婴儿标签常量 |
| 19 | `public const string NotaryTag = "Notary"` | `DefaultAgeModel.cs:277` | 公证人标签常量 |
| 20 | `public const string BarberTag = "Barber"` | `DefaultAgeModel.cs:280` | 理发师标签常量 |
| 21 | `public const string AlleyGangMemberTag = "AlleyGangMember"` | `DefaultAgeModel.cs:283` | 巷帮成员标签常量 |

> 注：类声明本身（`public class DefaultAgeModel : AgeModel`，第 7 行）不计入上述 21 个 public 成员，已在第 1 节记录。

---

## 3) ≥3 条可编译调用示例候选

以下示例均来自 `bannerlord-1.3.0` 源码树中的真实调用点，未编造。

### 示例 1：通过 Campaign.Current.Models.AgeModel 调用 GetAgeLimitForLocation（带标签）

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, ref num, ref num2, "AlleyGangMember");
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs:384`
- 说明：为巷帮成员角色计算年龄上下限，传入 `"AlleyGangMember"` 标签

### 示例 2：通过 Campaign.Current.Models.AgeModel 调用 GetAgeLimitForLocation（无标签）

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(townsman, ref num, ref num2, "");
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs:371`
- 说明：为普通镇民计算年龄上下限，不传附加标签

### 示例 3：读取 HeroComesOfAge 属性判断英雄是否成年

```csharp
if (heroObject != Hero.MainHero && !heroObject.IsPrisoner && !heroObject.IsWounded && heroObject.Age >= (float)Campaign.Current.Models.AgeModel.HeroComesOfAge && !flag)
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/ClanMemberRolesCampaignBehavior.cs:451`
- 说明：判断英雄年龄是否达到成年阈值（18 岁）

### 示例 4：读取 BecomeOldAge 属性判断是否进入老年

```csharp
if (hero.IsAlive && hero.Age >= (float)Campaign.Current.Models.AgeModel.BecomeOldAge && !CampaignOptions.IsLifeDeathCycleDisabled && hero.DeathMark == KillCharacterAction.KillCharacterActionDetail.None && MBRandom.RandomFloat < hero.ProbabilityOfDeath)
```

- 来源：`bannerlord-1.3.0/TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs:305`
- 说明：判断英雄年龄是否达到老年阈值（55 岁），用于死亡概率计算

### 示例 5：读取 BecomeInfantAge 属性判断是否为婴儿

```csharp
if (character.Age < (float)Campaign.Current.Models.AgeModel.BecomeInfantAge)
```

- 来源：`bannerlord-1.3.0/SandBox.GauntletUI/GauntletEducationScreen.cs:335`
- 说明：判断角色年龄是否低于婴儿阈值（3 岁）

### 示例 6：读取 BecomeTeenagerAge 属性判断是否为青少年

```csharp
return Campaign.Current.ConversationManager.OneToOneConversationAgent.Age < (float)Campaign.Current.Models.AgeModel.BecomeTeenagerAge;
```

- 来源：`bannerlord-1.3.0/SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs:528`
- 说明：判断村民年龄是否低于青少年阈值（14 岁）

---

## 4) 该页现状

**文件路径：** `content/v1.3.0/zh/api/campaign/DefaultAgeModel.md`

**当前字节数：** 1839 字节（`ls -la` 输出 `1839`，`wc -c` 输出 `1839`）

**六节齐全情况：**

| 节名 | 是否存在 | 对应实际标题 |
|------|---------|-------------|
| 概述 | ✅ 1 | `## 概述` |
| 心智模型 | ✅ 1 | `## 心智模型` |
| 怎么用 | ❌ 0 | 无此节（有 `## 使用示例` 但非"怎么用"） |
| 关键成员 | ❌ 0 | 无此节（有 `## 主要属性` 和 `## 主要方法` 但非"关键成员"） |
| 真实示例 | ❌ 0 | 无此节（有 `## 使用示例` 但非"真实示例"） |
| 参见 | ✅ 1 | `## 参见` |

**六节齐全率：3/6（概述、心智模型、参见已有；怎么用、关键成员、真实示例缺失）**

**现有内容结构：**
- YAML frontmatter（title, description）
- 类型元信息（Namespace, Module, Type, Base, File）
- `## 概述` — 一句话描述
- `## 心智模型` — 一句话描述
- `## 主要属性` — 7 个属性的表格（仅签名，无用途说明）
- `## 主要方法` — GetAgeLimitForLocation 签名 + 一句用途 + 一个伪代码示例
- `## 使用示例` — 一行 `Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());`
- `## 参见` — 一个返回链接

**主要差距：**
- 缺少"怎么用"节（心智模型的实际使用指导）
- 缺少"关键成员"节（带用途说明的成员表格）
- 缺少"真实示例"节（来自源码的真实调用点）
- 属性表格无用途说明
- 常量字段（13 个 public const string）完全未记录
- 示例为伪代码/编造，非源码真实调用
