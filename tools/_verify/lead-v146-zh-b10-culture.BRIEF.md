# brief · b10-culture（v1.4.6/zh 手写深页写作线）

- 批次：批 10
- 页面：`content/v1.4.6/zh/api/campaign/CultureObject.md`
- 源文件：`TaleWorlds.CampaignSystem/CultureObject.cs`（975 行）
- 锚表：`tools/_verify/_tmp/anchors/b10-culture.txt`（105 个锚点，派单前生成）
- 派单时刻：2026-10-08T01:20Z
- **本文件落盘理由**（boss #22603 跨线要求）：让「brief 里不出现锚表外的名字」这条规则**可机械检查**。内联 brief 事后不可审计。

---

## 题头三行（命令实测值，非断言）

```
**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class CultureObject : BasicCultureObject`
**Source:** `TaleWorlds.CampaignSystem/CultureObject.cs`
```

实测命令：`make-anchor-table.mjs` 抽声明行 + `grep -n` 定位。
原始输出：
```
### TaleWorlds.CampaignSystem/CultureObject.cs   (wc -l = 975, anchors = 105)
16: 	public sealed class CultureObject : BasicCultureObject
```

## 内容提示（**零名字**写法 —— 只描述角色 / 边界 / 主线）

> 请自己读源码后确定要写哪些成员。这一页的主线是：**它是「文化」这一层的定义对象**（由 XML 定义、在游戏启动时加载），一个文化决定了哪些默认值 —— 默认兵种、默认装备、文化加成与特性、以及与角色 / 聚落 / 势力之间的关联。
>
> **必须写清一个分层问题**：题头那行显示它派生自一个**更基础的文化基类**，而更下面还有「角色模板」那一层。请说明**哪一层是定义、哪一层是实例**，以及 mod 作者想加自己的文化时应改哪一层。

**自查**：本节不出现任何类型名 / 方法名 / 成员名（`BasicCultureObject` 只出现在「题头实测值」中，有命令支撑）。

## 门禁口径（预置，避免 worker 去读校验脚本）

- `checked` = 页面里所有 `文件.cs:N` 形态引用（写全文件名），全文任何位置都算，表格行内也算；要求 `checked ≥ 关键成员表行数`
- `J6=deep_pass` 硬要求 = `## 参见` 里 ≥2 条 markdown 链接
- `J7` = 全文不得出现 `自动生成` / `Auto-generated stub` / `<!-- v*-skeleton -->` / `是 TaleWorlds.X 下的公开类型` / `阅读时先通过属性了解状态`
- `J8` 正文 > 2500 字节；`J9` csharp 块 ≥3 有效行含真实调用；`J10` 链接只在 `## 参见`/`## 导航`；`J11` 叶子目标不带尾斜杠

## 链接白名单（已逐条实测存在）

`../Settlement` `../Village` `../Clan` `../Kingdom` `../Hero` `../CharacterObject` `../MobileParty` `../Campaign` `../ExplainedNumber` `../CampaignTime` `../_index` `../../core-extra/Game` `../../core-extra/BasicCharacterObject` `../../core-extra/ItemObject` `../../campaign-ext/MBObjectBase` `../../campaign-ext/MBObjectManager`

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
- 若源码与 brief 冲突，**以源码为准**并在回报里指出
