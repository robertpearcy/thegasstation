!function(n,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():n.transformicons=r()}(this||window,function(){var n={},r="tcon-transform",t={transform:["click"],revert:["click"]},o=function(n){return"string"==typeof n?Array.prototype.slice.call(document.querySelectorAll(n)):void 0===n||n instanceof Array?n:[n]},e=function(n){return"string"==typeof n?n.toLowerCase().split(" "):n},i=function(n,r,i){var f=(i?"remove":"add")+"EventListener",a=o(n),s=a.length,u={};for(var d in t)u[d]=r&&r[d]?e(r[d]):t[d];for(;s--;)for(var l in u)for(var v=u[l].length;v--;)a[s][f](u[l][v],c)},c=function(r){n.toggle(r.currentTarget)};return n.add=function(r,t){return i(r,t),n},n.remove=function(r,t){return i(r,t,!0),n},n.transform=function(t){return o(t).forEach(function(n){n.classList.add(r)}),n},n.revert=function(t){return o(t).forEach(function(n){n.classList.remove(r)}),n},n.toggle=function(t){return o(t).forEach(function(t){n[t.classList.contains(r)?"revert":"transform"](t)}),n},n}),window.addEventListener("load",function(n){transformicons.add(".tcon")},!0);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdGNvbi5qcyJdLCJuYW1lcyI6WyJhIiwiYiIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJ0cmFuc2Zvcm1pY29ucyIsInRoaXMiLCJ3aW5kb3ciLCJkIiwiYyIsImYiLCJ0cmFuc2Zvcm0iLCJyZXZlcnQiLCJlIiwiaCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImciLCJpIiwicSIsIm4iLCJvIiwicCIsImxlbmd0aCIsIm0iLCJqIiwibCIsImsiLCJ0b2dnbGUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwicmVtb3ZlIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkNBQUMsU0FBU0EsRUFBRUMsR0FBc0IsbUJBQVRDLFFBQXFCQSxPQUFPQyxJQUFLRCxPQUFPRCxHQUE0QixpQkFBVkcsUUFBb0JDLE9BQU9ELFFBQVFILElBQVNELEVBQUVNLGVBQWVMLElBQWhKLENBQXVKTSxNQUFNQyxPQUFPLFdBQVcsSUFBSUMsS0FBS0MsRUFBRSxpQkFBaUJDLEdBQUdDLFdBQVcsU0FBU0MsUUFBUSxVQUFjQyxFQUFFLFNBQVNDLEdBQUcsTUFBYyxpQkFBSkEsRUFBcUJDLE1BQU1DLFVBQVVDLE1BQU1DLEtBQUtDLFNBQVNDLGlCQUFpQk4sU0FBdUIsSUFBSkEsR0FBaUJBLGFBQWFDLE1BQWNELEdBQWNBLElBQVVkLEVBQUUsU0FBU2MsR0FBRyxNQUFjLGlCQUFKQSxFQUFxQkEsRUFBRU8sY0FBY0MsTUFBTSxLQUFpQlIsR0FBUVMsRUFBRSxTQUFTQyxFQUFFQyxFQUFFQyxHQUFHLElBQUlaLEdBQUdZLEVBQUUsU0FBUyxPQUFPLGdCQUFnQkMsRUFBRWQsRUFBRVcsR0FBR0ksRUFBRUQsRUFBRUUsT0FBT0MsS0FBSyxJQUFJLElBQUlDLEtBQUtyQixFQUFHb0IsRUFBRUMsR0FBSU4sR0FBR0EsRUFBRU0sR0FBSS9CLEVBQUV5QixFQUFFTSxJQUFJckIsRUFBRXFCLEdBQUcsS0FBTUgsS0FBSyxJQUFJLElBQUlJLEtBQUtGLEVBQXFCLElBQWxCLElBQUlHLEVBQUVILEVBQUVFLEdBQUdILE9BQWFJLEtBQUtOLEVBQUVDLEdBQUdkLEdBQUdnQixFQUFFRSxHQUFHQyxHQUFHbEMsSUFBV0EsRUFBRSxTQUFTZSxHQUFHTixFQUFFMEIsT0FBT3BCLEVBQUVxQixnQkFBK1csT0FBL1YzQixFQUFFNEIsSUFBSSxTQUFTWixFQUFFVixHQUFVLE9BQVBTLEVBQUVDLEVBQUVWLEdBQVVOLEdBQUdBLEVBQUU2QixPQUFPLFNBQVNiLEVBQUVWLEdBQWUsT0FBWlMsRUFBRUMsRUFBRVYsR0FBRSxHQUFhTixHQUFHQSxFQUFFRyxVQUFVLFNBQVNHLEdBQWlELE9BQTlDRCxFQUFFQyxHQUFHd0IsUUFBUSxTQUFTZCxHQUFHQSxFQUFFZSxVQUFVSCxJQUFJM0IsS0FBWUQsR0FBR0EsRUFBRUksT0FBTyxTQUFTRSxHQUFvRCxPQUFqREQsRUFBRUMsR0FBR3dCLFFBQVEsU0FBU2QsR0FBR0EsRUFBRWUsVUFBVUYsT0FBTzVCLEtBQVlELEdBQUdBLEVBQUUwQixPQUFPLFNBQVNwQixHQUFpRixPQUE5RUQsRUFBRUMsR0FBR3dCLFFBQVEsU0FBU2QsR0FBR2hCLEVBQUVnQixFQUFFZSxVQUFVQyxTQUFTL0IsR0FBRyxTQUFTLGFBQWFlLEtBQVloQixHQUFVQSxJQUFLRCxPQUFPa0MsaUJBQWlCLE9BQU8sU0FBUzFDLEdBQUdNLGVBQWUrQixJQUFJLFdBQVUiLCJmaWxlIjoibGlicy90Y29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGEsYil7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKGIpfWVsc2V7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiKXttb2R1bGUuZXhwb3J0cz1iKCl9ZWxzZXthLnRyYW5zZm9ybWljb25zPWIoKX19fSh0aGlzfHx3aW5kb3csZnVuY3Rpb24oKXt2YXIgZD17fSxjPVwidGNvbi10cmFuc2Zvcm1cIixmPXt0cmFuc2Zvcm06W1wiY2xpY2tcIl0scmV2ZXJ0OltcImNsaWNrXCJdfTt2YXIgZT1mdW5jdGlvbihoKXtpZih0eXBlb2YgaD09PVwic3RyaW5nXCIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGgpKX1lbHNle2lmKHR5cGVvZiBoPT09XCJ1bmRlZmluZWRcInx8aCBpbnN0YW5jZW9mIEFycmF5KXtyZXR1cm4gaH1lbHNle3JldHVybltoXX19fTt2YXIgYj1mdW5jdGlvbihoKXtpZih0eXBlb2YgaD09PVwic3RyaW5nXCIpe3JldHVybiBoLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpfWVsc2V7cmV0dXJuIGh9fTt2YXIgZz1mdW5jdGlvbihpLHEsbil7dmFyIGg9KG4/XCJyZW1vdmVcIjpcImFkZFwiKStcIkV2ZW50TGlzdGVuZXJcIixvPWUoaSkscD1vLmxlbmd0aCxtPXt9O2Zvcih2YXIgaiBpbiBmKXttW2pdPShxJiZxW2pdKT9iKHFbal0pOmZbal19d2hpbGUocC0tKXtmb3IodmFyIGwgaW4gbSl7dmFyIGs9bVtsXS5sZW5ndGg7d2hpbGUoay0tKXtvW3BdW2hdKG1bbF1ba10sYSl9fX19O3ZhciBhPWZ1bmN0aW9uKGgpe2QudG9nZ2xlKGguY3VycmVudFRhcmdldCl9O2QuYWRkPWZ1bmN0aW9uKGksaCl7ZyhpLGgpO3JldHVybiBkfTtkLnJlbW92ZT1mdW5jdGlvbihpLGgpe2coaSxoLHRydWUpO3JldHVybiBkfTtkLnRyYW5zZm9ybT1mdW5jdGlvbihoKXtlKGgpLmZvckVhY2goZnVuY3Rpb24oaSl7aS5jbGFzc0xpc3QuYWRkKGMpfSk7cmV0dXJuIGR9O2QucmV2ZXJ0PWZ1bmN0aW9uKGgpe2UoaCkuZm9yRWFjaChmdW5jdGlvbihpKXtpLmNsYXNzTGlzdC5yZW1vdmUoYyl9KTtyZXR1cm4gZH07ZC50b2dnbGU9ZnVuY3Rpb24oaCl7ZShoKS5mb3JFYWNoKGZ1bmN0aW9uKGkpe2RbaS5jbGFzc0xpc3QuY29udGFpbnMoYyk/XCJyZXZlcnRcIjpcInRyYW5zZm9ybVwiXShpKX0pO3JldHVybiBkfTtyZXR1cm4gZH0pKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbihhKXt0cmFuc2Zvcm1pY29ucy5hZGQoXCIudGNvblwiKX0sdHJ1ZSk7Il19
