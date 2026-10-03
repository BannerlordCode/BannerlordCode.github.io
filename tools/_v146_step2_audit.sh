#!/usr/bin/env bash
# 第 2 步验收（只读）。用法：bash tools/_v146_step2_audit.sh
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io || exit 1
D=content/v1.3.0/zh/api/core-extra
SEL="ItemObject WeaponComponent ViewModel Game ItemModifier BodyProperties WeaponDesign EntitySystem PropertyOwner MBReadOnlyList MBList MBBindingList MBStringBuilder MBMath Color Vec3 Vec2 GameStateManager MBGameModel GameModelsManager DefaultSkills ActionSetCode AgentAttackType AgentControllerType AgentData AgentFlag AgentMovementMode AgentOriginUtilities AgentSaveData AgentState"
G4="AmbientInformation ApplicationPlatform ApplicationVersion ApplicationVersionJsonConverter ApplicationVersionType AreaInformation ArmorComponent ArmorMaterialTypes AssemblyLoader AsyncRunner"

deep=0; notdeep=""
for n in $SEL $G4; do
  s=$(node tools/_check_deep.mjs "$D/$n.md" 2>/dev/null | sed -n 's/.*"status":"\([a-z_]*\)".*/\1/p')
  if [ "$s" = "deep_pass" ]; then deep=$((deep+1)); else notdeep="$notdeep $n:$s"; fi
done
echo "=== _check_deep ==="
echo "deep_pass = $deep / 40"
[ -n "$notdeep" ] && echo "未过:$notdeep"

echo "=== 生成标记残留（必须为 0）==="
left=0
for n in $SEL $G4; do
  c=$(grep -l "的自动生成类参考" "$D/$n.md" 2>/dev/null | wc -l)
  [ "$c" != "0" ] && { echo "  残留 $n = $c"; left=$((left+c)); }
done
echo "生成标记残留合计 = $left"

echo "=== 链接门禁 ==="
node tools/_check_links_exist.mjs "$D" 2>&1 | grep -E "pages|dead|RESULT"

echo "=== 反虚构门禁 ==="
node tools/lib/anti-fabrication.mjs --content "$D" --source ../bannerlord-1.3.0 2>&1 | grep -E "pages scanned|positive control|reader-owned|FABRICATED|RESULT"
